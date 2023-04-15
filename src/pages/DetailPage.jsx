import React, { Component } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteNote, getNote, archiveNote, unarchiveNote, } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail';
import PropTypes from 'prop-types'

const DetailPageWapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteNoteHandler(id) {
        deleteNote(id);
        navigate('/')
    }

    function onActiveNoteHandler() {
        navigate('/')
    }

    return <DetailPage id={id} onDelete={onDeleteNoteHandler} onActiveNote={onActiveNoteHandler} />
}

class DetailPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(this.props.id)
        }
    }

    onToggleArchiveHandler = (id) => {
        this.state.note.archived ? unarchiveNote(id) : archiveNote(id);
        this.props.onActiveNote()
    }


    render() {
        if (this.state.note == null) {
            return <p>Note detail is note Found</p>
        }
        return (
            <NoteDetail {...this.state.note} onDelete={this.props.onDelete} onToggleArchive={this.onToggleArchiveHandler} />
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onActiveNote: PropTypes.func.isRequired
}


export default DetailPageWapper