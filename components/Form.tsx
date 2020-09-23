import React from "react";
import MaskedInput from "react-input-mask";
import { useForm, Controller } from "react-hook-form";

export const clearTel = tel => tel.replace(/[^0-9]/g, "");

const isNotFilledTel = v => {
    const clearedTel = clearTel(v);
    return clearedTel.length < 11 ? "Phone number is required." : undefined;
};

const CustomMaskedInput = props => {
    const { value, onChange, name } = props;
    return (
        <MaskedInput
            name={name}
            value={value}
            mask="+7 (999) 999-99-99"
            alwaysShowMask
            onChange={e => {
                e.persist();
                onChange(e.target.value);
            }}
        >
            {(props) => {
                const { onChange, ...restProps } = props;
                return <input {...restProps} onChange={onChange} />;
            }}
        </MaskedInput>
    );
};

const CustomMaskedInput2 = props => {
    const { value, onChange, name } = props;
    return (
        <MaskedInput
            name={name}
            value={value}
            mask="+7 (999) 999-99-99"
            alwaysShowMask
            onChange={e => {
                e.persist();
                onChange(e.target.value);
            }}
        >
            {(props) => {
                const { onChange, ...restProps } = props;
                return <input {...restProps} onChange={onChange} />;
            }}
        </MaskedInput>
    );
};

const onSubmit = data => {
    console.log("submit", data);
};

export default function Form() {
    const { handleSubmit, errors, control } = useForm({
        reValidateMode: "onSubmit"
    });
    const [tel, setTel] = React.useState("7");
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        as={<CustomMaskedInput />}
                        value={tel}
                        onChange={([e]) => {
                            setTel(e);
                            return { value: e };
                        }}
                        rules={{
                            validate: {
                                inputTelRequired: isNotFilledTel
                            }
                        }}
                        defaultValue={tel}
                        name="ContolledMaskedInput"
                        control={control}
                    />

                    {errors.ContolledMaskedInput && (
                        <p>{errors.ContolledMaskedInput.message}</p>
                    )}
                </div>
                <div>
                    <Controller
                        as={<CustomMaskedInput2 />}
                        value={tel}
                        onChange={([e]) => {
                            setTel(e);
                            return { value: e };
                        }}
                        rules={{
                            validate: {
                                inputTelRequired: isNotFilledTel
                            }
                        }}
                        defaultValue={tel}
                        name="ContolledMaskedInput2"
                        control={control}
                    />

                    {errors.ContolledMaskedInput2 && (
                        <p>{errors.ContolledMaskedInput2.message}</p>
                    )}
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}
