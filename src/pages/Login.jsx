import { Button, StyleSheet, View } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchema } from "../validationSchemas/login";

const initialValues = {
    email: "",
    password: "",
};

const styles = StyleSheet.create({
    form: {
        margin: 12 
    },
    error:{
        color: "red",
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: -12,
        marginBottom: 10
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return(
        <>
            <StyledTextInput
                value={field.value}
                error={meta.error }
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}

// const validate = (values) => {
//     const errors = {}

//     if(!values.email){
//         errors.email = "Email is required"
//     }
//     else if(!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*$/i.test(values.email)){
//         errors.email = "Invalid email address"
//     }

//     console.log(errors)

//     return errors
// }

const Login = () => {
    return (
        <Formik
            validationSchema={loginValidationSchema}
            //validate={validate}
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
        >
        {({ handleChange, handleSubmit, values }) => {
            return(
                <View style={styles.form}>
                    <FormikInputValue 
                        name="email"
                        placeholder="E-mail"
                    />
                    <FormikInputValue 
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                    />
                    <Button 
                        onPress={handleSubmit} 
                        title="Log In"
                    />
                </View>
            )
        }}
        </Formik>
    );
};

export default Login;
