import "./ListItem.css";

const ListItem = () => {
    return (
        <div className="ListItem">
            <input type="checkbox" /><div className="title_col">할 일</div>
        </div>
    );
};
export default ListItem;