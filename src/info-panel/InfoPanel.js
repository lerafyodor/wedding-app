import React from 'react';
import './InfoPanel.scss';

function InfoPanel() {
    return (
        <div className="wd-info-panel">
            <div className="wd-info-panel__inner">
                <div className="wd-info-panel__inner-left">
                    <div className="wd-info-panel__block">
                        <div className="wd-info-panel__block-title">
                            DRESS CODE
                        </div>
                        <div className="wd-info-panel__block-text">
                            Приходите так, как вам будет удобно.
                        </div>
                    </div>

                    <div className="wd-info-panel__block">
                        <div className="wd-info-panel__block-title">
                            SAVE THE DATE
                        </div>
                        <div className="wd-info-panel__block-text">
                            Добавьте событие в календарь:
                            <br/>
                            <a href={"/files/wedding.ics"} target={"_blank"}
                               rel={"noopener noreferrer"}>Apple</a>
                            <br/>
                            <a href={"http://www.google.com/calendar/event?action=TEMPLATE&dates=20210627T120000Z%2F20210627T190000Z&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%A4%D1%91%D0%B4%D0%BE%D1%80%D0%B0%20%D0%B8%20%D0%9B%D0%B5%D1%80%D1%8B&location=%D0%9A%D0%B0%D1%84%D0%B5%20%D0%A1%D1%80%D0%B5%D0%B4%D0%B0&details=https%3A%2F%2Flerafyodor.github.io"} target={"_blank"}
                               rel={"noopener noreferrer"}>Google</a>
                        </div>
                    </div>

                    <div className="wd-info-panel__block">
                        <div className="wd-info-panel__block-title">
                            КАК ДОБРАТЬСЯ
                        </div>
                        <div className="wd-info-panel__block-text _left-right">
                            <div className="wd-info-panel__block-text-left">
                                г. Москва, ул. Крылатская 1.
                                <br/>
                                <a href={"https://yandex.ru/maps/-/CCQ~RMGRgD"} target={"_blank"}
                                   rel={"noopener noreferrer"}>Яндекс.Карты</a>
                                <br/>
                                <a href={"https://goo.gl/maps/tri7mYxZxZNzMiVVA"} target={"_blank"}
                                   rel={"noopener noreferrer"}>Google.Карты</a>
                                <br/>
                                <br/>
                                Вход в парк со стороны ул. Крылатские Холмы в районе дома 7/2.
                                <br/>
                                Карта как пройти от такси до кафе «Среда» <a href={"/images/map.png"} target={"_blank"}
                                                                             rel={"noopener noreferrer"}>здесь</a>.
                                <br/>
                                <br/>
                                <a href={"/images/mapSreda.jpg"} target={"_blank"}
                                   rel={"noopener noreferrer"}>Инструкция</a> как добраться на метро, автобусе или личном
                                авто.
                                <br/>
                                <br/>
                                Кафе находится на холме. Чтобы до него дойти, нужно подняться примерно 100м по деревянному настилу.
                                Если вы планируете прийти на каблуках, учитывайте это — возможно вы захотите взять сменку.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wd-info-panel__inner-right">
                    <div style={{position: "relative", overflow: "hidden", width: "100%", height: "100%"}}><a
                        href="https://yandex.ru/maps/org/sreda/1149408352/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Москва</a><a
                        href="https://yandex.ru/maps/213/moscow/category/banquet_hall/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Яндекс.Карты</a>
                        <iframe defer src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad2c8bf9f2a68d0027962a8a5757ad3cb3b9128f17f6cd4b95dfdfcd405a7c104&amp;source=constructor" width="100%" height="100%"
                                title={"Yandex Map"}
                                frameBorder="1" allowFullScreen={true} style={{position: "relative"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(InfoPanel);
