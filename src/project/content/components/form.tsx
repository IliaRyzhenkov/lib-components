import { Button } from '../../../my-lib/components/buttons';
import { Form, Input, Textarea } from '../../../my-lib/components/form';
import { Box, Container } from '../../../my-lib/layout';


const ComponentsForm = () => {   
 return(    
  <Container mt='35px' mb='35px'>
    <Form maxW='600px' m='auto' shadow='variant-6' br='6px' p='30px'>
     <Box display='flex' justifycontent='space-between'>
     <Input type="text" w={'49%'} placeholder="Fill name" />
     <Input type="text" w={'49%'} placeholder="Fill lust name" />
     </Box>
     <Input type="email" placeholder="Fill email" />
     <Textarea placeholder="Massege" h='150px'/>
     <Button type='submit' p='10px 70px' mt='20px' hover={'reverseBorder'}>Send</Button>
    </Form>
  </Container>
) 
}
export default ComponentsForm