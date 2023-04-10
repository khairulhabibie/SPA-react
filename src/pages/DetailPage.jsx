import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };
    }

    render() {
        if (this.state.note === null) {
            return <p>note is not found!</p>;
        }

        return (
            <>     <NoteDetail {...this.state.note} />
            </>
        );
    }
}

// export default DetailPage;
export default DetailPageWrapper;
