import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail';

const DetailPage = () => {
    const { id } = useParams();
    const note = getNote(id)
    // console.log(note)

    return (
        <>
            {note == null ?
                <p>Note detail is note Found</p> :
                <NoteDetail {...note} />
            }

        </>
    )
}

export default DetailPage
