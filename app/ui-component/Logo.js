// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
const Logo = () => {


    return (

        <Box display="flex" alignItems="center" justifyContent="center" width="100%">
            <img src={"https://www.fanabc.com/afaanoromoo/wp-content/uploads/2022/07/294636614_5365636483527047_1107537517138897134_n.jpg"} alt="INSA" width="50" style={{ borderRadius: '50%' }} />
            <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                WAF-INSA
            </Typography>
        </Box>
    );
};

export default Logo;
