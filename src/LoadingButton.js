import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingButton = (props) => {
    const { variant, color, isLoading, ...newProps } = props;

    return ( 
        <Button
            variant={variant}
            color={color}
            style={{minWidth: '91px'}}
            { ...isLoading && {disabled: true} }
            {...newProps}
        >
            { isLoading ? <CircularProgress size={25} /> : props.children  }
        </Button>
     );
}

LoadingButton.defaultProps = {
    isLoading: false,
    variant: 'contained',
    color: 'primary'
}

export default LoadingButton;