import { useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingSelector } from '../../store/selectors';
import { Switch } from '../../components/form';
import {SupervisorRole, EngineerRole, MemberRole} from '../../enums/roles';
import { NotStart, Inprogress, Completed } from '../../enums/taskStatus';
import { 
    getSuperintendents, 
    getEngineers, 
    getMembers,
    removeMember,
    getMemberProfile,
    changeUserRole,
    getProjectDetail,
    getTaskEngineers,
    getTaskMembers,
    getProjectSuperintendents,
    sendEmail,
    checkTask
} 
from '../../store/actions/projectActions';

import $ from 'jquery';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';

var notification = {
    title: "Wonderful!",
    message: "Configurable",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 2000,
        onScreen: true
    }
};

const ManagerMembers = () => {
    const loading = useSelector(state => loadingSelector(['SEND_EMAIL'])(state));
    const dispatch = useDispatch();
    const projectId = window.localStorage.getItem("projectId");
    const selectedMember = useSelector(state => state.project.selectedMember);
    const project = useSelector(state => state.project.project);
    const projectSuperintendent = useSelector(state => state.project.projectSuperintendent);
    const taskEngineers = useSelector(state => state.project.taskEngineers);
    const taskMembers = useSelector(state => state.project.taskMembers);
    var selectedMemberId = null;
    var selectedTaskId = 0;
    useEffect(() => {
        $("#side-menu").show();
        $(".Forhome").hide();
        $(".react-switch-label").click(function(){
            var checked = $("#react-switch-new").val();
            if(checked == 'on'){
                $("#react-switch-new").val("off");
                $(".react-switch-label").addClass("off");
                $(".dropdown-toggle.user-role").hide();
                $(".btn-invite-member").hide();
            }
            else{
                $("#react-switch-new").val("on");
                $(".react-switch-label").removeClass("off");
                $(".dropdown-toggle.user-role").show();
                $(".btn-invite-member").show();
            }
            
        });
    });

    useEffect(() => {
        dispatch(getProjectSuperintendents(projectId));
        dispatch(getProjectDetail(projectId)).then(() => {
            if(project && project.tasks && project.tasks.length > 0)
                selectedTaskId = project.tasks[0]._id;
        });
    }, []);

    const handleSelectUser = (userId) => {
        var data = {
            memberId: userId
        };
        selectedMemberId = userId;
        
        dispatch(getMemberProfile(data));
    }

    const handleOpenSendEmailDialog = () => {
        var radioValue = $("input[name='role']:checked").val();
        if(radioValue != undefined){
            window.$("#inviteMemberModal").modal('hide');
            $("#selected_role").text(radioValue);
            window.$("#sendEmailModal").modal();
        } else {
            store.addNotification({
                ...notification,
                type: 'info',
                title: "Information",
                message: "Please select user role first."
            });
        }
    }

    const handleOpenInviteDialog = () => {
    }

    const handleChangeRole = (memberId, role) => {
        let data = {
            memberId: memberId,
            role: role
        };
        dispatch(changeUserRole(data)).then(() => {
            store.addNotification({
                ...notification,
                type: 'success',
                title: "Success!",
                message: "You have changed user role."
            });
            dispatch(getSuperintendents());
            dispatch(getEngineers());
            dispatch(getMembers());
        });
    }

    const handleTeamSelected = (taskId, index) => {
        $("#react-switch-new").val("on");
        $(".react-switch-label").removeClass("off");
        $(".dropdown-toggle.user-role").show();
        $(".btn-invite-member").show();
        index += 1;
        if(taskId != 0){
            let data = {
                projectId: projectId,
                taskId: taskId
            }
            dispatch(getTaskEngineers(data)).then(() => {
                dispatch(getTaskMembers(data));
            });
        }
        var teamName = $(".team-dropdown > a:nth-child("+index+")").text();
        $("a.selected-team").html(teamName + "<i class='fa fa-sort-down'></i>");
    }
    const handleSendEmail = () => {
        var role = $("input[name='role']:checked").val();
        var ToAddressEmail = $("input[name='email']").val();
        if(role != '' && ToAddressEmail != ''){
            let data = {
                role : role,
                ToAddressEmail : ToAddressEmail
            }
            dispatch(sendEmail(data)).then(() => {
                window.$("#sendEmailModal").modal('hide');
                store.addNotification({
                    ...notification,
                    title: "Success!",
                    message: "You sent email successfully."
                })
            });
        }
    }
    const handleRemoveMember = () => {
        if(selectedMemberId != null){

        } else {
            store.addNotification({
                ...notification,
                type: 'warning',
                title: "Warning!",
                message: "Please select member first."
            })
        }
    }

    var teamNames = [];
    
    if(project){
        if(project.tasks){
            var i = 0;
            for(i = 0; i < project.tasks.length; i++){
                if(selectedTaskId == 0)
                    selectedTaskId = project.tasks[0]._id;
                var j = 0;
                if(project.superintendent){
                    for(j = 0 ; j < project.superintendent.length; j++){
                        if(project.superintendent[j].id == project.tasks[i].createdBy){
                            teamNames.push({ teamName: "Team " + project.superintendent[j].firstName + " " + project.superintendent[j].lastName + "-Task " + project.tasks[i].name, taskId: project.tasks[i]._id});
                        }
                    }
                }
            }
        }
    }

    if(selectedTaskId != 0){
        console.log(selectedTaskId);
    }

    useEffect(() => {
        setTimeout(() => {
            console.log("here", selectedTaskId);
        }, 2000);
      }, []);

    return (
        <React.Fragment>
            <ReactNotification />
            <div className="members-wrapper col-md-12">
                <div>
                    <div className="row">
                        <div className="col-sm-12 col-xl-9 col-md-6">
                            <div className="scrollbar-members row" id="style-2">
                                <div className="row col-md-12" style={{padding: '15px'}}>
                                    <div className="col-xl-5 col-md-12 col-sm-12 text-left">
                                        <a className="dropdown-toggle arrow-none nav-user selected-team" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        Procon Team <i className="fa fa-sort-down"></i>                                        
                                        </a>
                                        {
                                            teamNames != [] ? 
                                            <div className="dropdown-menu dropdown-menu-right team-dropdown" style={{left: '70px !important'}}>
                                                {
                                                    
                                                    teamNames.map((value, index) => {
                                                        // if(index == 0)
                                                            // handleTeamSelected(value.taskId, index);
                                                        return (
                                                            <a key={index} className="dropdown-item" onClick={() => handleTeamSelected(value.taskId, index)}>{value.teamName}</a>
                                                        ) 
                                                    })
                                                }
                                            </div> 
                                            : ''
                                        }
                                    </div>
                                    <div className="col-xl-7 col-md-12 col-sm-12 text-right" style={{paddingTop: '10px'}}>
                                        <span>Manage Team&nbsp;&nbsp;</span>
                                        <Switch />
                                        <a className="btn-invite-member" onClick={handleOpenInviteDialog} data-toggle="modal" data-target="#inviteMemberModal">
                                            &nbsp;&nbsp;<span> Invite Member </span><i className="fa fa-user-plus"></i>
                                        </a>
                                        <a className="btn-invite-member" onClick={handleRemoveMember}>
                                            &nbsp;&nbsp;<span> Remove Member </span><i className="fa fa-user-minus"></i>
                                        </a>
                                    </div>
                                </div>
                                { 
                                    // projectSuperintendent.map((value, index) => {
                                    //     return (
                                        projectSuperintendent ?
                                            <div className="col-sm-12 col-xl-4 col-md-12">
                                                <a onClick={() => handleSelectUser(projectSuperintendent.id)} className="friends-suggestions-list team-member-list">
                                                    <div className="border-bottom position-relative">
                                                        <div className="float-left mb-0 mr-3">
                                                            <img src={!projectSuperintendent.photo ? require('../../images/users/user.jpg') : projectSuperintendent.photo} alt="" className="roundedImg thumb-md"/>
                                                            <p className="user-name" >{projectSuperintendent.firstName} {projectSuperintendent.lastName}</p>
                                                        </div>
                                                        <a className="dropdown-toggle ml-3 arrow-none nav-user user-role" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        {projectSuperintendent.role} <i className="fa fa-sort-down"></i>                                        
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right role-dropdown">
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(projectSuperintendent.id, projectSuperintendent.id, SupervisorRole)}> {SupervisorRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(projectSuperintendent.id, EngineerRole)}> {EngineerRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(projectSuperintendent.id, MemberRole)}> {MemberRole}</a>
                                                        </div>
                                                        <div className="desc">
                                                            <h5 className="font-14 mb-1 pt-2">{projectSuperintendent.email}</h5>
                                                            <p className="text-muted">{projectSuperintendent.mobile}</p>
                                                        </div>
                                                    </div>
                                                </a>                                      
                                            </div> :''
                                    //     ) 
                                    // })
                                }
                                { 
                                    taskEngineers.map((value, index) => {
                                        return (
                                            <div className="col-sm-12 col-xl-4 col-md-12" key={index}>
                                                <a onClick={() => handleSelectUser(value.id)} className="friends-suggestions-list team-member-list">
                                                    <div className="border-bottom position-relative">
                                                        <div className="float-left mb-0 mr-3">
                                                            <img src={!value.photo ? require('../../images/users/user.jpg') : value.photo} alt="" className="roundedImg thumb-md"/>
                                                            <p className="user-name" >{value.firstName} {value.lastName}</p>
                                                        </div>
                                                        <a className="dropdown-toggle ml-3 arrow-none nav-user user-role" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        {value.role} <i className="fa fa-sort-down"></i>                                        
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right role-dropdown">
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, SupervisorRole)}> {SupervisorRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, EngineerRole)}> {EngineerRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, MemberRole)}> {MemberRole}</a>
                                                        </div>
                                                        <div className="desc">
                                                            <h5 className="font-14 mb-1 pt-2">{value.email}</h5>
                                                            <p className="text-muted">{value.mobile}</p>
                                                        </div>
                                                    </div>
                                                </a>                                      
                                            </div>
                                        ) 
                                    })
                                }
                                { 
                                    taskMembers.map((value, index) => {
                                        return (
                                            <div className="col-sm-12 col-xl-4 col-md-12" key={index}>
                                                <a onClick={() => handleSelectUser(value.id)} className="friends-suggestions-list team-member-list">
                                                    <div className="border-bottom position-relative">
                                                        <div className="float-left mb-0 mr-3">
                                                            <img src={!value.photo ? require('../../images/users/user.jpg') : value.photo} alt="" className="roundedImg thumb-md"/>
                                                            <p className="user-name" >{value.firstName} {value.lastName}</p>
                                                        </div>
                                                        {
                                                            value.status == NotStart ? 
                                                                <div className="circle-light light-red mr-3"></div>
                                                            : ''
                                                        }
                                                        {
                                                            value.status == Inprogress ? 
                                                                <div className="circle-light light-yellow mr-3"></div>
                                                            : ''
                                                        }
                                                        {
                                                            value.status == Completed ? 
                                                                <div className="circle-light light-green mr-3"></div>
                                                            : ''
                                                        }
                                                        <a className="dropdown-toggle ml-3 arrow-none nav-user user-role" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                        {value.role} <i className="fa fa-sort-down"></i>                                        
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right role-dropdown">
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, SupervisorRole)}> {SupervisorRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, EngineerRole)}> {EngineerRole}</a>
                                                            <a className="dropdown-item" onClick={() => handleChangeRole(value.id, MemberRole)}> {MemberRole}</a>
                                                        </div>
                                                        <div className="desc">
                                                            <h5 className="font-14 mb-1 pt-2">{value.email}</h5>
                                                            <p className="text-muted">{value.mobile}</p>
                                                        </div>
                                                    </div>
                                                </a>                                      
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-3 col-md-6">
                            <div className="card card-member">
                                {
                                    selectedMember != [] ? <>
                                        <h5 className="font-14 mb-1 pt-2">Personal Information</h5>
                                        <div className="border-bottom position-relative personal-info">
                                            <div className="float-left mb-0 mr-3">
                                                <img src={selectedMember && !selectedMember.photo ? require('../../images/users/user.jpg') : selectedMember.photo} alt="" className="roundedImg thumb-md"/>
                                                <p className="user-name" >{selectedMember.firstName}&nbsp;{selectedMember.lastName}</p>
                                            </div>
                                            <div className="user-role float-right mt-2 pt-1"> {selectedMember.role} </div>
                                        </div>
                                        <div className="info-member mrg-space member-info">
                                            {selectedMember && selectedMember.dob && <p><i className="fa fa-birthday-cake icons-pro" /> {new Date(selectedMember.dob).toLocaleDateString()}</p>}
                                            {selectedMember && selectedMember.email && <p><i className="fa fa-envelope icons-pro" /> {selectedMember.email}</p>}
                                            {selectedMember && selectedMember.mobile && <p><i className="fa fa-mobile-alt icons-pro" /> {selectedMember.mobile}</p>}
                                            {selectedMember && selectedMember.address && <p><i className="fa fa-map-marker-alt icons-pro" /> {selectedMember.address}</p>}
                                            {selectedMember && selectedMember.experience && <p><i className="fa fa-file-alt icons-pro" /> {selectedMember.experience}</p>}
                                        </div>
                                    </>
                                    : ''
                                }
                                
                                <div className="card">
                                    <div className="card-heading">
                                        <div className="mini-stat-icon float-right">
                                            <nav className="navbar-custom">
                                                <ul className="navbar-right list-inline float-right mb-0">
                                                    <li className="dropdown notification-list list-inline-item">
                                                        <div className="dropdown notification-list nav-pro-img">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="p-20">
                                            <h5 className="font-16">Project name</h5>
                                            <p>Project location</p>
                                        </div>
                                        <div className="pro-image">
                                            <img src={require('../../images/project.jpg')} alt="user" className="menu-logo1" style={{width: '100%'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-xl-12 col-md-12">
                <div className="modal fade" id="sendEmailModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p>Invite member</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label" style={{paddingTop: '10px'}} id="selected_role">Superintendent</label>
                                    <div className="col-sm-9">
                                        <input className="form-control" name="email" type="eamil" placeholder="example@example.com"/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer text-center">
                                <p><button className="btn btn-info btn-lg waves-effect waves-light task-btn3" loading={loading} disabled={loading} onClick={() => handleSendEmail()}>Send Invitation Email</button></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="inviteMemberModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header row">
                                <p>Invite Member</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body row">
                                <div className="col-md-4 col-sm-4 col-xl-4 offset-1">
                                    <input type="radio" id={SupervisorRole} name="role" value={SupervisorRole} />
                                    <label for={SupervisorRole}>&nbsp;&nbsp;{SupervisorRole}</label><br/>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xl-7" style={{fontSize: '17px'}}>
                                    Create, delete tasks/Manage members
                                </div>
                                <div className="col-md-4 col-sm-4 col-xl-4 offset-1">
                                    <input type="radio" id={EngineerRole} name="role" value={EngineerRole} />
                                    <label for={EngineerRole}>&nbsp;&nbsp;{EngineerRole}</label><br/>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xl-7" style={{fontSize: '17px'}}>
                                   Edit tasks/Manage members
                                </div>
                                <div className="col-md-4 col-sm-4 col-xl-4 offset-1">
                                    <input type="radio" id={MemberRole} name="role" value={MemberRole} />
                                    <label for={MemberRole}>&nbsp;&nbsp;{MemberRole}</label>
                                </div>
                                <div className="col-md-7 col-sm-7 col-xl-7" style={{fontSize: '17px'}}>
                                    Accept tasks/Feedback
                                </div>
                                <div className="col-sm-12 col-xl-12 col-md-12 text-center">
                                    <button onClick={handleOpenSendEmailDialog}className="btn btn-info btn-lg task-btn2 task-btn3 btn-generate" style={{width: 'auto'}}>Generate an invitation </button>
                                </div>
                                <div className="col-sm-12 col-xl-12 col-md-12 text-center" style={{marginTop: '15px'}}>
                                    <hr />
                                </div>
                                <div className="col-sm-12 col-xl-12 col-md-12 text-center" style={{padding: '17px'}}>
                                    <a className="btn-invite-member" >
                                        &nbsp;&nbsp;<span> Invite by an email </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ManagerMembers;