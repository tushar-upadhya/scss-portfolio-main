import Section from "../../common/section/Section";
import ContactInfo from "./contact-info/ContactInformation";
import Form from "./form/Form";

import "./style.scss";

const Contact = () => {
    return (
        <Section
            id="contact"
            title="Any Question? Feel Free to Contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section>
    );
};

export default Contact;
