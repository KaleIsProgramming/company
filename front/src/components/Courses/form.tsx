import styled from "@emotion/styled";
import { useAppSelector, useAppDispatch } from "../../store";
import { addRegistrationes } from "../../store/slices";

export interface RegistrationeData {
    course: string;
    name: string;
    surname: string;
    graduate: string;
    company_name: string;
    nip: string;
    street: string;
    post_code: string;
    city: string;
    company_phone: string;
    user_phone: string;
    user_mail: string;
    participant_mail: string;
    website: string;
    other: string;
    accomodation: string;
    discount: string;
    other_discount: string;
    r1: boolean;
    r2: boolean;
    r3: boolean;
    r4: boolean;
}

export const Form = () => {

    const courses = useAppSelector(state => state.coursesSlice.courses);
    const date = new Date();
    const seconds = Math.floor(date.getTime() / 1000);
    const activeCourses = courses.filter(course => (Math.floor(new Date(course.data).getTime() / 1000) - seconds) > 0);
    const dispatch = useAppDispatch()
    console.log(courses);
    console.log(activeCourses);

    const sendFormHandler = () => {
        const requireds = document.getElementsByClassName('required');
        let isFilled = true;

        for ( let i = 0; i < requireds.length; i++ ) {
            switch(requireds[i].classList[0]) {
                case "select": 
                    const select = requireds[i] as HTMLInputElement;
                    if(select.value === "Wybierz z listy") {
                        isFilled = false;
                    }
                    break;
                case "input": 
                    const input = requireds[i] as HTMLInputElement;
                    if(!input.value) {
                        isFilled = false;
                    }
                    break;
                case "checkbox": 
                    const checkbox = requireds[i] as HTMLInputElement;
                    if(!checkbox.checked) {
                        isFilled = false;
                    }
                    break;
                case "email": 
                    const email = requireds[i] as HTMLInputElement;
                    if(!email.value.includes("@")) {
                        isFilled = false;
                    }
                    break;
                case "phone": 
                    const phone = requireds[i] as HTMLInputElement;
                    const notAvaibleNums = "`';,./?!@#$%^&*()-_=+[]{}~AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpQqRrSsŚśTtUuVvWwXxYyZzŹźŻż";

                    for(let j = 0; j < notAvaibleNums.length; j++) {
                        if (phone.value.includes(notAvaibleNums[j])) {
                            isFilled = false;
                        } else if(!phone.value) {
                            isFilled = false;
                        }
                    }
                    break;
            };
        };

        if(isFilled = false) {
            return console.log('coś poszło cie tak.')
        }

        const dataToPost = document.getElementsByClassName('data') as any;

        const paylaod: RegistrationeData = {
            course: dataToPost[0].value,
            name: dataToPost[1].value,
            surname: dataToPost[2].value,
            graduate: dataToPost[3].value,
            company_name: dataToPost[4].value,
            nip: dataToPost[5].value,
            street: dataToPost[6].value,
            post_code: dataToPost[7].value,
            city: dataToPost[8].value,
            company_phone: dataToPost[9].value,
            user_phone: dataToPost[10].value,
            user_mail: dataToPost[11].value,
            participant_mail: dataToPost[12].value,
            website: dataToPost[13].value,
            other: dataToPost[14].value,
            accomodation: dataToPost[15].value,
            discount: dataToPost[16].value,
            other_discount: dataToPost[17].value,
            r1: true,
            r2: true,
            r3: true,
            r4: true,
        }

        dispatch(addRegistrationes(paylaod))
    }

    return(
        <StyledForm>
            <InputsContainer>
                <InputContainer>
                    <Name>
                        *Szkolenie:
                    </Name>
                    <InputBox>
                        <select className="select required data">
                            <option>Wybierz z listy</option>
                            {
                                activeCourses.map(course => {
 
                                    if ((Math.floor(new Date(course.data).getTime() / 1000) - seconds) > 0) {
                                        return <option key={Math.random()}>{course.nazwa}  {new Date(course.data).getDate()}-{new Date(course.data).getMonth() + 1}-{new Date(course.data).getFullYear()}</option>;
                                    } else {
                                        return false;
                                    }
                                })
                            }
                        </select>
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Imię:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Nazwisko:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Stanowisko:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Pełna nazwa firmy:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * NIP:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Ulica:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Kod pocztowy:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Miasto:
                    </Name>
                    <InputBox>
                        <input className="input required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        Telefon do firmy:
                    </Name>
                    <InputBox>
                        <input className="input data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Telefon do mnie:
                    </Name>
                    <InputBox>
                        <input className="phone required data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Mail zgłaszającego:
                    </Name>
                    <InputBox>
                        <input className="email required data" type="email" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        Mail uczestnika (jeśli inny niż zgłaszającego):
                    </Name>
                    <InputBox>
                        <input className="email data" type="email" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        Strona www:
                    </Name>
                    <InputBox>
                        <input className="input data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        Uwagi:
                    </Name>
                    <InputBox>
                        <input className="input data" type="text" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        nocleg:
                    </Name>
                    <InputBox>
                        <select className="select data" >
                            <option>Wybierz z listy</option>
                            <option>gerwegoi</option>
                        </select>
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        RABAT:
                    </Name>
                    <InputBox>
                        <select className="select data">
                            <option>Wybierz z listy</option>
                            <option>40%</option>
                        </select>
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        RABAT INNY:
                    </Name>
                    <InputBox>
                        <input className="input data" type="textarea" />
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                        * Akceptuję regulamin:
                    </Name>
                    <InputBox>
                        <input className="checkbox required data" type="checkbox" /> TAK
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                    * Wypełniając formularz zgadzają się Państwo na przetwarzanie danych firmy.:
                    </Name>
                    <InputBox>
                        <input className="checkbox required data" type="checkbox" /> TAK
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                    * Zgadzam się z zapisami Polityki Prywatności:
                    </Name>
                    <InputBox>
                        <input className="checkbox required data" type="checkbox" /> TAK
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                    * Zgoda na wykorzystanie wizerunku:
                    </Name>
                    <InputBox>
                        <input className="checkbox required data" type="checkbox" /> TAK
                    </InputBox>
                </InputContainer>
                <InputContainer>
                    <Name>
                    *
                    </Name>
                    <InputBox>
                        <input type="textarea" placeholder="Uczestnicy przyjmują do wiadomości i wyrażają zgodę na utrwalenie przebiegu szkolenia w formie nagrania obrazu i dźwięku oraz wyrażają zgodę na wykorzystanie swojego wizerunku, jako uczestników szkolenia, w filmie promującym IGI FOOD LAW Sp. z o. o. z siedzibą w Warszawie, przy ul. Puławskiej 2B, jaki powstanie w wyniku wykorzystania między innymi fragmentów nagrania przedmiotowego szkolenia. IGI FOOD LAW wykorzystywać będzie przedmiotowy film promocyjny (a także jego opracowania i pojedyncze kadry) w celach reklamowych, promocyjnych i marketingowych związanych z prowadzoną przez ww. firmę działalnością. Film promocyjny będzie rozpowszechniany między innymi w sieci WWW, w telewizji, oraz na publicznych prezentacjach a także będą rozpowszechniane w formie utrwaleń na nośnikach (w tym nośnikach cyfrowych); a jego fragmenty będą wykorzystywane jako elementy materiałów drukowanych i lub strony WWW IGI FOOD LAW Sp. z o. o."/>
                    </InputBox>
                </InputContainer>
                
                <p>* pole wymagane</p>

                <button onClick={() => sendFormHandler()}>Wyślij</button>

            </InputsContainer>
        </StyledForm>
    );
};

const StyledForm = styled.div`
    height: 90%;
    width: 80%;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #00AFFF;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
        background:#D9D9D9;
        border-radius: 20px;
    }
`;

const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        height: 5vh;
        width: 10%;
        margin-top: 2%;
        background: #00AFFF;
        color: white;
        border: none;
        cursor: pointer;
    }

    button:hover {
        scale: 1.05;
    }
`;

const InputContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1% 0;
`;

const Name = styled.div`
    height: 100%;
    width: 50%;
    text-align: right;
    margin-right: 2%;
`;

const InputBox = styled.div`
    height: 100%;
    width: 48%;
`;