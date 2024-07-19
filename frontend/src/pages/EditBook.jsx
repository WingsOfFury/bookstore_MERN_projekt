import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';
import { useSnackbar } from 'notistack';



const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setPublishYear(response.data.publishYear);
                setTitle(response.data.title);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('Ein Fehler ist aufgetreten.Bitte überprüfe die Console');
                console.log(error);
            })
    }, [])
    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Buch erfolgreich bearbeitet', { variant: "success" });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                // alert('Ein Fehler ist aufgetreten.Bitte überprüfe die Console');
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <section className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Buch bearbeiten</h1>
            {loading ? <Spinner /> : ''}
            <section className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <section className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Titel</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </section>
                <section className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Autor</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </section>
                <section className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Erscheinungsdatum</label>
                    <input
                        type='text'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full' />
                </section>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
            </section>
        </section>
    )
}

export default EditBook;