import {useForm} from 'react-hook-form'
import {FormData, FormProps} from '../interfaces'
import NumberFormat from 'react-number-format'
import React, {useState} from 'react'
import {Button} from '../styles/Buttons'
import {ModalStyle, PayForm} from '../styles/MainElements'
import Modal from 'react-modal'
import {useRouter} from 'next/router'


export const Form:React.FC<FormProps> = ({operatorName}) => {
    const {register, handleSubmit, errors} = useForm<FormData>({
        reValidateMode: "onSubmit"
    })

    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const [serverErrors, setServerErrors] = useState<Array<string>>([])
    const [serverSuccess, setServerSuccess] = useState<Array<string>>([])

    const openModal = () => {
        setIsOpen(true)
    }

    const ModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '100%',
            height: '100%',
            maxWidth: '400px',
            maxHeight: '400px',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        overlay: {
            background: 'rgba(12, 13, 18, 0.8)',
            transition: '0.2s linear'
        }
    };

    const clearTel = tel => tel.replace(/[^0-9]/g, "");

    const isNotFilledTel = v => {
        const clearedTel = clearTel(v);
        return clearedTel.length < 11 ? "⚠ Phone number is required" : null;
    };

    const sumValue = (val: number | string) => {
        val > 1000 ? val = '1000' : val == 0 ? val = '1' : val
        return val + ' ₽'
    }

    const router = useRouter()

    return (
        <PayForm onSubmit={handleSubmit(async (formData) => {
            setServerErrors([])
            setServerSuccess([])

            const response = await fetch('/api/operators/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone: formData.phone,
                    sum: formData.sum,
                    operator: formData.operator
                }),
            })

            const data = await response.json()

            if (data.errors) {
                setServerErrors([data.errors, ''])
            } else {
                setServerSuccess([data.message])
            }
            openModal()
        })}>
            <div>
                <label htmlFor="phone">
                    Phone:
                </label>
                <NumberFormat
                    name="phone"
                    id="phone"
                    format="+7 (###) ### ## ##"
                    mask="_"
                    getInputRef={register({
                        validate: {
                            inputTelRequired: isNotFilledTel
                        }
                    })}
                />
                {errors.phone ? <p>{errors.phone.message}</p> : null}
            </div>
            <div>
                <label htmlFor="sum">
                    Sum:
                </label>
                <NumberFormat
                    name="sum"
                    id="sum"
                    thousandSeparator={' '}
                    format={sumValue}
                    getInputRef={register({required: '⚠ Sum is required'})}
                />
                {errors.sum ? <p>{errors.sum.message}</p> : null}
            </div>
            <input name='operator' type="hidden" value={operatorName} ref={register()}/>
            <Button type="submit">SUBMIT</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    if (serverErrors.length > 0) {
                        setIsOpen(false)
                    } else {
                        setIsOpen(false)
                        router.push('/')
                    }

                }}
                style={ModalStyles}
                ariaHideApp={false}
                contentLabel="modal"
            >
                <ModalStyle error>{serverErrors}</ModalStyle>
                <ModalStyle>{serverSuccess}</ModalStyle>
            </Modal>
        </PayForm>
    )
}
