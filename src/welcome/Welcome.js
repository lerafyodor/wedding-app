import React from 'react';
import './Welcome.scss';

const NAMES = {
    yv: "ЮЛЯ и ВИТАЛИЙ!",
    dl: "ДАША и ЛЁША!",
    sv: "СОФА и ВАНЯ!",
    vk: "ВИКА и КОСТЯ!",
    nk: "НИКА и КИРИЛЛ!",
    ll: "ЛИАНА и ЛОГАН!",
    p: "МАМА и ПАПА!",
    ba: "НЕЛЯ, СЕРГЕЙ и КАРИНА!",
    gu: "ЖЕНЯ, СВЕТА и ВАНЯ!",
    ks: "КАТЯ и САША!",
    am: "АНТОН и МАША!",
    pn: "ПАША и НАСТЯ!",
    dm: "ДАША и МАКСИМ!",
    ss: "СЕМЁН и САША!",
    white: "БЕЛЫЙ!",
    mi: "МИТЯЙ!",
    ko: "КОРНИЧ!",
    ta: "ТАНЯ!",
    an: "АНТОН!",
    pt: "ПАША и ТАНЯ!",
    da: "АНТОН и ДАША!",
    ey: "ЕЛЕНА и ЮРИЙ!",
    sa: "СВЕТА и АЛЕКСАНДР!",
    ia: "ИРИНА и АНДРЕЙ!",
    el: "ЕЛЕНА!",
    mv: "МИША, ВИКА и МИХМИХ!",
}

function Welcome() {
    const [state, setState] = React.useState({visible: false, styles: {}, welcomeName: "|"});
    React.useEffect(() => {
        setTimeout(() => {
            let oldSize = {width: window.innerWidth, height: window.innerHeight};
            const urlParams = new URLSearchParams(window.location.search);
            const refParam = urlParams.get("ref");
            const welcomeName = (refParam && NAMES[refParam]) || "ДОРОГИЕ ДРУЗЬЯ";
            setState({visible: true, styles: {height: (window.innerHeight + "px")}, welcomeName: welcomeName});
            window.addEventListener("resize", () => {
                let newSize = {width: window.innerWidth, height: window.innerHeight};
                let xd = newSize.width - oldSize.width;
                xd = xd > 0 ? xd : -xd;
                let yd = newSize.height - oldSize.height;
                yd = yd > 0 ? yd : -yd;
                let diff = (xd + yd) / (newSize.width + newSize.height);
                if (diff >= 0.1) {
                    setState({visible: true, styles: {height: (window.innerHeight + "px")}, welcomeName: welcomeName});
                    oldSize.width = newSize.width;
                    oldSize.height = newSize.height;
                }
            });
        })
    }, []);
    return (
        <div className="wd-welcome__wrapper-max" style={state.styles}>
            <div className={"wd-welcome__wrapper " + (state.visible ? '_show' : '_hidden')} style={state.styles}>
                <div className="wd-welcome">
                    <div className="wd-welcome__inner">
                        <img className="wd-welcome__peo1" src={'/images/peo1.gif'} alt={""}/>

                        {/*<div className="wd-welcome__photo">*/}

                        {/*</div>*/}
                        <div className="wd-welcome__texts">
                            <div className="wd-welcome__dear">
                                {state.welcomeName}
                            </div>
                            <div className="wd-welcome__text">
                                Приглашаем вас на торжество,
                                <br/>
                                посвящённое нашему бракосочетанию!
                                <br/>
                                Ждём вас <span className="wd-welcome__text _bold"> 27 июня 2021 </span> к <span
                                className="wd-welcome__text _bold"> 15:00 </span>
                                <br/>
                                в кафе «Среда» на Крылатских холмах.
                            </div>

                            <div className="wd-welcome__names">
                                ФЁДОР и ЛЕРА
                            </div>
                        </div>
                        <img className="wd-welcome__peo2" src={'/images/peo2.gif'} alt={""}/>
                    </div>
                </div>
                <div className="wd-welcome__scroll">
                    <svg className="wd-welcome__scroll-arrow" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.418 6.10902C17.69 5.84102 18.127 5.84102 18.397 6.10902C18.667 6.37702 18.668 6.81002 18.397 7.07802L10.489 14.908C10.219 15.176 9.78201 15.176 9.51001 14.908L1.60201 7.07802C1.33201 6.81002 1.33201 6.37702 1.60201 6.10902C1.87301 5.84102 2.31101 5.84102 2.58101 6.10902L10 13.25L17.418 6.10902Z"/>
                    </svg>
                    <svg className="wd-welcome__scroll-arrow _delay1" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.418 6.10902C17.69 5.84102 18.127 5.84102 18.397 6.10902C18.667 6.37702 18.668 6.81002 18.397 7.07802L10.489 14.908C10.219 15.176 9.78201 15.176 9.51001 14.908L1.60201 7.07802C1.33201 6.81002 1.33201 6.37702 1.60201 6.10902C1.87301 5.84102 2.31101 5.84102 2.58101 6.10902L10 13.25L17.418 6.10902Z"/>
                    </svg>
                    <svg className="wd-welcome__scroll-arrow _delay2" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.418 6.10902C17.69 5.84102 18.127 5.84102 18.397 6.10902C18.667 6.37702 18.668 6.81002 18.397 7.07802L10.489 14.908C10.219 15.176 9.78201 15.176 9.51001 14.908L1.60201 7.07802C1.33201 6.81002 1.33201 6.37702 1.60201 6.10902C1.87301 5.84102 2.31101 5.84102 2.58101 6.10902L10 13.25L17.418 6.10902Z"/>
                    </svg>

                    {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 27" width="12px" height="18px">*/}
                    {/*    <g fill="none" fill-rule="evenodd" stroke="#cbc6a0" stroke-width="2">*/}
                    {/*        <rect width="16" height="25" x="1" y="1" rx="8"></rect>*/}
                    {/*        <path stroke-linecap="square" d="M9 12.15V8.1"></path>*/}
                    {/*    </g>*/}
                    {/*</svg>*/}
                    {/*Скролльте вниз*/}
                </div>
            </div>
        </div>
    );
}

export default React.memo(Welcome);
