import { Box,Divider,Button} from './import'
import Style from './deco'

export default function Blocks()
{

    return(

        <Box sx={Style.body}>

            <Box sx={Style.main}>

                <Box sx={Style.line1}><Divider/></Box>

                <Box sx={Style.divide}>

                    <Box sx={Style.block1}>
                        
                    </Box>
                    
                    <Box sx={Style.block2}>
                        
                    </Box>

                    <Box sx={Style.block3}>
                        
                    </Box>

                </Box>

            <Box sx={Style.divide}>

                    <Button sx={Style.prebutton}>Previous</Button>
                    <Button sx={Style.canbutton}>Cancel</Button>
                    <Button sx={Style.crbutton}>Create Quotation</Button>

            </Box>

            </Box>

        


        </Box>

    )

}