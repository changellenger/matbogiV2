import {firestore} from '../Firebase_config'

const LikedList = () => {

    function aaa(){

        return (

            <p>aaa입력가능</p>

        )
    }

    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <aaa/>
        </div>
    );
};

export default LikedList;