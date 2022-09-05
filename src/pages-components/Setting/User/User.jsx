import React, { useState, useEffect } from "react";
import {
	Row,
	Col,
	Label,
	FormGroup,
	Input,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Container,
} from "reactstrap";
import { FaCog } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetEmployeeByMerchantId } from "../../../actions";

const User = () => {
	const [inviteUser, setInviteUser] = useState(false);
	const inviteToggle = () => setInviteUser(!inviteUser);

	const dispatch = useDispatch();
	// const history = useHistory();

	const { user } = useSelector((state) => state.LoginReducer);
	useEffect(() => {
		dispatch(GetEmployeeByMerchantId(user.merchant_id));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const { employee } = useSelector((state) => state.CustomerReducer);
	console.log("employee", employee);
	return (
		<div id='user'>
			<div className='addOrganization mb-1 d-flex align-items-center justify-content-between p-5'>
				<div className='app-page-title--first'>
					<div className='app-page-title--iconbox d-50'>
						<div className='d-70 d-flex align-items-center justify-content-center'>
							<FaCog className='icon' />
						</div>
					</div>
					<div className='app-page-title--heading'>
						<h1>User</h1>
					</div>
				</div>
			</div>
			<div className='contactDetail m-5 p-5'>
				<div className='d-flex align-items-center justify-content-between'>
					<div className='information'>
						<h1>Account owner</h1>
					</div>
				</div>
				<div
					className='d-flex align-items-center justify-content-between'
					style={{ paddingTop: "30px" }}>
					<div className='d-flex align-items-center'>
						<div className='avatar-icon-wrapper avatar-initials avatar-icon-lg'>
							<div className='avatar-icon text-white bg-dark'>
								{user?.name.slice(0, 1)}
							</div>
						</div>
						<div className='ml-3 payforContainer'>
							<h3 className='heading' style={{ textTransform: "capitalize" }}>
								{user?.name}
							</h3>
							<p className='email'>{user?.merchant_email}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='contactDetail m-5 p-5'>
				<div className='d-flex align-items-center justify-content-between'>
					<div className='information'>
						<h1>Staff accounts</h1>
					</div>
					<Button color='primary' onClick={() => inviteToggle()}>
						<span className='btn-wrapper--label'>Invite Staff Account</span>
					</Button>
				</div>
				{employee?.map((item, key) => {
					return (
						<div key={key}>
							<div
								className='d-flex align-items-center justify-content-between payforContainer'
								style={{ paddingTop: "30px", paddingRight: "30px" }}>
								<div className='d-flex align-items-center'>
									<div className='avatar-icon-wrapper avatar-initials avatar-icon-lg'>
										<div className='avatar-icon text-white bg-dark'>
											{item.name.slice(0, 1)}
										</div>
									</div>
									<div className='ml-3'>
										<h3
											className='heading'
											style={{ textTransform: "capitalize" }}>
											{item.name}
										</h3>
										<p className='email'>{item.email}</p>
									</div>
								</div>
								{/* <p
									className='mr-5 edit'
									// onClick={() => history.push("/user/edit-user")}
								>
									Edit
								</p> */}
							</div>
							<br />
							{employee.length !== key + 1 && <div className='mb-4 divider' />}
						</div>
					);
				})}
			</div>
			<Modal
				zIndex={2000}
				size='xl'
				centered
				scrollable
				isOpen={inviteUser}
				toggle={inviteToggle}>
				<ModalHeader toggle={inviteToggle}>Send Invitation</ModalHeader>
				<ModalBody>
					<form>
						<Container>
							<div className='py-4'>
								<Row>
									<Col md='6'>
										<FormGroup>
											<Label>First Name</Label>
											<Input type='text' />
										</FormGroup>
									</Col>
									<Col md='6'>
										<FormGroup>
											<Label>Last Name</Label>
											<Input type='text' />
										</FormGroup>
									</Col>
									<Col md='12'>
										<FormGroup>
											<Label>Email</Label>
											<Input type='text' />
										</FormGroup>
									</Col>
								</Row>
							</div>
						</Container>
						{/* <div className="divider mt-5 mb-4" /> */}

						<ModalFooter className='d-flex justify-content-center'>
							<Button
								color='primary'
								// type="submit"
								className='ml-auto'
								style={{ width: "185px" }}
								onClick={() => inviteToggle()}>
								Send Invitation
							</Button>
						</ModalFooter>
					</form>
				</ModalBody>
			</Modal>
		</div>
	);
};
export default User;
