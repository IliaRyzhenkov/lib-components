import { List, ListItem } from "../../../my-lib/components/list"

const ComponentsList = () => {

  return (
  <>
  <List mt="30px" fs="20px" listStyle="square" >
  <ListItem beforeStyle="square">
    Lorem, ipsum dolor.
    </ListItem>
  <ListItem beforeStyle="circle">
    Lorem, ipsum dolor.
    </ListItem>
  <ListItem beforeStyle="LineX">
    Lorem, ipsum dolor.
    </ListItem>
  <ListItem beforeStyle="LineY">
    Lorem, ipsum dolor.
    </ListItem>
  </List>
  </>
  )
}
export default ComponentsList