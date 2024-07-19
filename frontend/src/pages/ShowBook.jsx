import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    return (
        <section className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'></h1>
            {loading ? (
                <Spinner />
            ) : (
                <section className='flex flex-col border-2 border-sky-400 w-fit p-4'>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book._id}</span>
                    </section>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Id</span>
                        <span>{book.title}</span>
                    </section>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Autor</span>
                        <span>{book.author}</span>
                    </section>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Erscheinungsdatum</span>
                        <span>{book.publishYear}</span>
                    </section>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Erstellt am</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </section>
                    <section className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Zeitpunkt der letzten Aktualisierung</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </section>
                </section>
            )}
        </section>
    )
}

export default ShowBook