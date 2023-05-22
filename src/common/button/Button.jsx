import Arrow from "../icon/Arrow";

import "./button.scss";

const Button = ({ text, action, icon }) => {
    return (
        <div className="call-to-action" onClick={action}>
            <span className="text">{text}</span>
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default Button;
