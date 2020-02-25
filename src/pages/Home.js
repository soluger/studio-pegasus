import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import { AuthContext } from '../config/Auth';
import Introducao from '../components/Introducao';
import Footer from '../components/Footer';

export default function Home(){
	const { currentUser } = useContext(AuthContext);
    if (currentUser) {
    return <Redirect to="/dashboard" />;
    }   
    return (
        <>
        <Introducao />
        <Footer />
        </>
    )
}