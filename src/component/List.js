import "./List.css"
import ListItem from "./ListItem";


const List = () => {
    return (
        <div className="List">
          <div className="List_Wrapper">
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <div className="Tab_Bar">
            <div>left item</div>
            <div className="Select">
                <div>All</div>
                <div>Active</div>
                <div>Completed</div>
            </div>
            <div>Clear Completed</div>
          </div>
        </div>
        
      );
    };
export default List;