import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select'
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


// trabalhando com estado
function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            //operador spread ... que traz o scheduleItems antes de inserir um novo objeto
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }


    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        //evita com que o form seja recaarregado ao executar o botão de submit
        e.preventDefault();

        //executando a chamada da api passando todas as variáveis do form
        //em schedule: scheduleItems estou renomeando essa variável pq na api ela se chama apenas 'schedule' 
        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    {/* a função onChange irá executar quando houver uma alterção no valor do input
                    e = evento. Nesse momento executaremos a função "setName" que modifica o value  */}
                    <Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                    <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
                    <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
                </fieldset>
            </main>

            <main>
                {/* onSubmit verifica se os dados foram enviados do form  */}
                < form onSubmit={handleCreateClass} >
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[

                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ed. Física', label: 'Ed. Física' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                            ]}
                        />
                        <Input name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Horários Disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (

                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input name="to"
                                        label="Até"
                                        type="time"
                                        onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                        value={scheduleItem.to} />
                                </div>
                            )
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar Cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div >
    )
}

export default TeacherForm;
