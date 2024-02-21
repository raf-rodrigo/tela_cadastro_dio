import {IconContainer, InputContainer, InputText} from "./styles";
import {Controller} from "react-hook-form";

function Input({leftIcon, name, control, ...rest}){

    const Input = ({leftIcon, name, control, ...rest}) => {
        return(
            <InputContainer>
                {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
                <Controller
                    render={({ field }) => <InputText {...field} {...rest}/>}
                    name={name}
                    control={control}
                />
            </InputContainer>
        );
    }
}
export default Input;