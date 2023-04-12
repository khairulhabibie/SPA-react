import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteNote, getNote } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail';

const DetailPageWapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteNoteHandler(id) {
        deleteNote(id);
        navigate('/')
    }

    return <DetailPage id={id} onDelete={onDeleteNoteHandler} />
}


class DetailPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(this.props.id)
        }
    }



    render() {
        if (this.state.note == null) {
            return <p>Note detail is note Found</p>
        }
        return (
            <NoteDetail {...this.state.note} onDelete={this.props.onDelete} />
        )
    }
}


export default DetailPageWapper