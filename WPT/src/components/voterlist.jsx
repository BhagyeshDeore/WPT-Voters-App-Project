import { Button, Container, Modal, Table } from "react-bootstrap";
//import { Header } from "./Header";
import { useEffect, useState } from "react";
import {  fetchVoters , deleteVoter , updateVoter } from "../Services/voterServices";
import { useNavigate } from "react-router-dom";
//import { NavigationBar } from "./NavigationBar";

export function Voterlist() {

    const [voters, setVoters] = useState([]);
    //useHistory
    //const [showDialog, setShowDialog] = useState(false);
    //const [selectedphone,setSelectedphone] = useState("");
    const navigate = useNavigate();

    // const openModalDialog = () => {
    //     setShowDialog(true);
    // }
    // const closeModalDialog = () => {
    //     setShowDialog(false);
    // }

    async function populateVoterState() {
        try {
            const data = await fetchVoters();
            setVoters(data.voters);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateVoterState();
    }, []);

    const handleVoterDelete = async (phone) => {
        try {
            await deleteVoter(phone);
            populateVoterState();
            //closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
        {/* <NavigationBar/> */}
        <Container>
            
            {/* <Header text="List of all the students"></Header> */}
            {voters.length !== 0 ? <Table className="mt-4">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>age</th>
                        <th>Phone no</th>
                        <th>Gender</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       voters.map((s) => {
                            return (
                                <tr>
                                    
                                    <td>{s.name}</td>
                                    <td>{s.age}</td>
                                    <td>{s.phone}</td>
                                    <td>{s.gender}</td>
                                    <td>
                                        {/* <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedRoll(s.voterid);
                                        }}>Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit/${s.roll}`)
                                        }}>Edit</Button> */}
                                        <Button variant="danger" onClick={()=>{
                                            handleVoterDelete(s.phone);
                                        }}>delete</Button>&nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" onClick={()=>{
                                            navigate(`/edit/${s.phone}`);
                                        }} >Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> : <p>No students found...!</p>}

            {/* <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete student with roll {selectedRoll}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleStudentDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </Container>
        </>
    );
}