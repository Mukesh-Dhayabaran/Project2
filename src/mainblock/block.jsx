import { Box,Divider,Button,Card,Typography,ChevronRightIcon,Looks4OutlinedIcon} from './import'
import Style from './deco'

export default function Blocks()
{

    return(
        
        <Box sx={Style.body}>

            <Card sx={Style.main}>

                <Typography sx={Style.topcontent}>
                    <sup>Add Contact</sup>
                    <ChevronRightIcon/> 
                    <sup>Lead Details</sup> 
                    <ChevronRightIcon/> 
                    <sup>Preview and Create Lead</sup> 
                    <ChevronRightIcon/> 
                    <sup>Quotation Details</sup> 
                    <ChevronRightIcon/>
                    <Looks4OutlinedIcon/>
                    <sup>Preview and Create</sup> 
                </Typography>

                <Box sx={Style.line1}><Divider/></Box>

                <Box sx={Style.divide}>

                    <Box sx={Style.block1}>
                        
                    </Box>
                    
                    <Box sx={Style.block2}>
                        
                    </Box>

                    <Box sx={Style.block3}>

                        <Typography sx={Style.text}>Quotation Summary</Typography>

                        <Box sx={Style.bill}>


                            <Box sx={Style.divide}>
                                <Box>
                                    <Typography sx={Style.header1}>DESCRIPTION</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents1}>Total Amount</Typography>
                                    <Typography sx={Style.contents1}>Total Discount</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents1}>Total Refundable</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents1}>Total Tax</Typography>
                                </Box>

                                <Box sx={Style.box2}>
                                    <Typography sx={Style.header2}>QTY</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents2}>3</Typography>
                                    <Typography sx={Style.contents2}>10%</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents2}>0%</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents2}>18%</Typography>
                                </Box>

                                <Box sx={Style.box3}>
                                    <Typography sx={Style.header3}>AMOUNT</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents3}>$ 3,600.00</Typography>
                                    <Typography sx={Style.contents3}>-$ 100.00</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents3}>$ 0</Typography>
                                    <Box sx={Style.line1}><Divider/></Box>
                                    <Typography sx={Style.contents3}>$ 648.00</Typography>
                                </Box>

                            </Box>

                            <Box sx={Style.line1}><Divider/></Box>

                            <Box sx={Style.line2}><Divider/></Box>

                            <Box sx={Style.divide}>

                                <Typography sx={Style.contents4}>Quote Amount</Typography>
                                <Typography sx={Style.contents5}>$ 4,148.00</Typography>

                            </Box>

                        </Box>
                        
                    </Box>

                </Box>

                <Box sx={Style.divide}>

                       <Button sx={Style.prebutton}>Previous</Button>
                       <Button sx={Style.canbutton}>Cancel</Button>
                       <Button sx={Style.crbutton}>Create Quotation</Button>

                </Box>

            </Card>


        </Box>

    )

}