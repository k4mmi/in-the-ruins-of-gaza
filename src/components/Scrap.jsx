import { createDraggable, createScope } from 'animejs';
import { ScrapContainer } from '../components/ScrapContainer';
import { useRef, useEffect } from "react";
import "./Scrap.scss"

function randomRotate(){ 
    return (String(Math.floor(Math.random() * ( 360 ))) + "deg");
}

export function Scrap({ x, y, container = "", className }) {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add( self => {

            let scrapContainer = document.getElementById(container);
            
            createDraggable(root.current, {
                container: scrapContainer,
                containerFriction: 0.75,
                maxVelocity: 0.5,
                minVelocity: 0,
                // dragSpeed: 5.,
                containerPadding: [ -100, -100, -100, -100],
                cursor: {
                    onHover: 'pointer',
                    onGrab: 'pointer'
                }
            });

            scrapContainer = null;
            
        });

        return () => {
            scope.current.revert();
        };

    }, []);

    const randomNumber = Math.floor(Math.random() * ( 13 + 1 ));

    function randomLocation() {
        return `calc(${Math.floor(Math.random() * 100)}% - 100px)`;
    }
    
    let newX

    let newY

    if ( x === undefined && y === undefined ) {
        newX = String( randomLocation() );
        newY = String( randomLocation() );
    } else {
        newX = x;
        newY = y;
    }

    const scrapTypes = [
        <ScrapAsset0/>,
        <ScrapAsset1/>,
        <ScrapAsset2/>,
        <ScrapAsset3/>,
        <ScrapAsset4/>,
        <ScrapAsset5/>,
        <ScrapAsset6/>,
        <ScrapAsset7/>,
        <ScrapAsset8/>,
        <ScrapAsset9/>,
        <ScrapAsset10/>,
        <ScrapAsset11/>,
        <ScrapAsset12/>,
        <ScrapAsset13/>,
    ];

    return (
        <ScrapContainer>
            <g className={`scrap ${className}`} style={{ translate: `${newX} ${newY}` }} ref={root}>
                {scrapTypes[randomNumber]}
            </g>
        </ScrapContainer>
    );
}

function ScrapAsset0() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M18.3302 121.703L2.41696 128.984L0 123.695L17.9594 115.459L17.1142 101.293L131.989 40.7735L156.328 37.2903L181.928 22.1225L194.687 20.5266L195.27 24.9068L206.569 18.5928L216.205 6.86162L220.693 10.5662L210.359 23.136L196.096 31.1161L196.97 37.6748L233.525 29.0658L243.48 27.8192L260.986 17.987L271.339 0L276.375 2.90073L265.223 22.2856L258.79 25.897L262.455 25.4311L281.186 34.8206L289.21 11.1137L303.961 20.8644L311.937 13.2572L329.325 3.50653L332.165 8.58573L315.416 17.987L308.939 24.1612L311.275 25.699V96.7965L284.426 107.829L203.752 179.299H132.96L22.047 184.075L18.3302 121.703ZM89.7783 121.482L36.1129 118.884L40.2063 164.003L97.2897 160.822L96.2561 141.135L101.271 122.041L98.5522 121.913L91.4791 127.575L64.2413 141.88L61.5441 136.708L88.2844 122.682L89.7783 121.482ZM164.485 121.761L131.944 126.491H124.089L123.105 158.259L182.306 159.436V119.175L174.453 120.317L147.902 145.55L143.902 141.333L164.485 121.761Z" fill="url(#paint0_linear_93_276)"/>
            <defs>
            <linearGradient id="paint0_linear_93_276" x1="131.734" y1="125.128" x2="286.497" y2="42.68" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset1() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M31.3421 309.837L8.16631 299.519V278.767L25.3402 186.093L0 146.134L4.84871 92.5001L47.0877 68.6576L43.7331 32.4059L49.4866 31.8714L52.602 65.5437L71.2596 55.0167L98.2372 0L197.347 37.9947L193.268 48.9283L205.916 80.149L200.491 100.878L211.544 106.431V213.456L255.171 334.295V367.444L227.327 361.484L224.788 374.242L219.122 373.103L221.675 360.275L120.623 338.652L108.37 327.44L81.1662 332.006L79.5877 331.309L70.6599 358.23L65.1791 356.395L74.2802 328.938L36.9789 312.335L35.865 330.821L20.7087 367.654L15.37 365.423L30.1565 329.496L31.3421 309.837Z" fill="url(#paint0_linear_93_271)"/>
            <defs>
            <linearGradient id="paint0_linear_93_271" x1="66.5218" y1="204.671" x2="280.993" y2="343.026" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset2() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M24.2909 1.4294L75.8059 96.0819L146.087 200.936V221.086H113.683L36.1499 105.892L0 24.4154V0L24.2909 1.4294Z" fill="url(#paint0_linear_93_273)"/>
            <defs>
            <linearGradient id="paint0_linear_93_273" x1="66.4032" y1="98.7333" x2="-20.1689" y2="65.1982" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset3() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M97.6665 143.423L115.169 136.333V108.46L147.09 68.6467L171.852 28.1801L188.083 39.2028L193.738 0L288.72 54.4639L274.029 73.5625L304.231 62.9476L308.378 91.6991L294.85 112.19L316.428 99.526L331.798 102.294L346.726 135.277L387.866 132.949L394.337 159.865L393.166 193.523L397.241 258.124L360.696 270.175H17.4113L0 235.685L3.55809 85.3248L58.06 71.5602L97.6665 143.423ZM192.517 49.198L188.369 77.9552L208.729 60.2092L192.517 49.198ZM95.0541 150.706L73.0379 159.626L115.627 188.034L95.0541 150.706Z" fill="url(#paint0_linear_93_265)"/>
            <defs>
            <linearGradient id="paint0_linear_93_265" x1="207.639" y1="106.009" x2="336.329" y2="47.4813" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset4() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M75.885 0L101.127 9.60862L134.581 14.0661L143.973 8.2005L167.736 19.3982H185.148L193.906 25.1977L189.791 50.7156L195.084 86.7305L140.871 136.087L72.2552 129.016L0 113.369V37.3117L75.885 0ZM17.3737 60.6606V95.6304L61.1382 99.726L61.0686 61.9341L17.3737 60.6606ZM78.9344 64.9046V106.271L126.886 114.604L130.91 78.4082L78.9344 64.9046Z" fill="url(#paint0_linear_93_267)"/>
            <defs>
            <linearGradient id="paint0_linear_93_267" x1="130.665" y1="80.6132" x2="167.694" y2="19.3725" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset5() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M164.832 44.7288V33.5087L180.799 27.7845L179.202 15.758L144.684 23.1079L134.122 32.1965L155.49 34.4154L158.303 51.3643L149.841 54.3197L143.481 63.4398L151.62 73.9443L145.257 82.8872L147.944 99.0741H0V32.2L81.3308 0L224.163 4.7803L221.645 60.4052L185.716 86.5243L161.104 79.6604L164.832 44.7288ZM55.1677 30.2189L81.412 33.7313L107.02 22.4192L104.41 16.5224L71.2145 19.747L55.1677 30.2189Z" fill="url(#paint0_linear_93_266)"/>
            <defs>
            <linearGradient id="paint0_linear_93_266" x1="127.107" y1="18.0817" x2="180.734" y2="77.3055" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset6() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M28.8713 42.1072L0 28.8659L2.40343 23.5605L27.0867 34.8814L23.1872 26.113L28.4761 23.732L34.8613 38.0891L58.8377 22.0062L55.0054 20.4391L35.6852 4.50899L39.3576 0L57.9987 15.3693L64.6666 18.0954L77.6479 9.38763L86.936 23.4043L86.0251 26.8254L120.72 41.0077L137.08 46.4028L140.67 43.3549L147.701 49.9055L188.924 63.499L198.339 55.19L209.116 62.9357L211.571 70.9673L228.941 76.6948L267.099 71.9806L267.805 77.7675L228.364 82.6403L213.658 77.7909L219.127 95.6752L232.494 100.092L281.324 72.4248L284.167 77.5052L239.952 102.556L278.662 115.346L276.854 120.885L233.112 106.433L223.921 111.64L241.472 177.568L235.874 179.077L218.834 115.065L200.108 128.78L221.148 153.686L216.733 157.461L195.678 132.537L195.199 132.376L193.981 133.268L192.851 131.58L140.598 113.908L133.559 120.121H123.693L116.907 105.895L69.2649 89.7822L68.8106 91.4903L54.4132 96.32L50.7559 88.0961L24.4874 91.3003L23.7898 85.5122L47.2284 82.6531L33.2436 78.3237L34.9482 72.7513L45.365 75.9765L32.3721 46.7654L20.4176 54.7853L17.2029 49.9347L28.8713 42.1072ZM65.3283 24.6589L40.7482 41.1464L53.981 47.2155L72.7263 54.249L79.1046 30.2896L65.3283 24.6589ZM80.6145 24.6146L80.6597 24.4444L76.0418 17.4727L71.1573 20.7493L80.6145 24.6146ZM131.875 50.822L118.724 46.4856L89.2444 34.4348L104.358 66.1167L110.947 68.5886L131.875 50.822ZM183.863 67.966L157.894 59.4016L174.767 75.1218V75.9951L183.863 67.966ZM204.829 68.7437L204.154 66.5341L198.707 62.6198L195.321 65.6083L204.829 68.7437ZM212.384 93.4481L206.916 75.5672L190.26 70.0753L174.767 83.7503V85.581L198.013 88.7001L212.384 93.4481ZM225.652 103.968L221.215 102.501L222.252 105.894L225.652 103.968ZM187.522 123.628L168.972 95.9422V90.6847L167.182 90.4445L145.637 109.461L187.522 123.628ZM174.767 91.4624V94.1606L195.427 124.997L217.164 109.077L214.471 100.274L196.715 94.4066L174.767 91.4624ZM124.57 108.487L127.339 114.291H131.379L134.246 111.759L124.57 108.487ZM74.0613 85.2533L113.408 98.5611L105.112 81.1711L104.706 81.5163L74.0613 85.2533ZM56.7773 87.3615L57.5583 89.1187L62.4521 87.4781L60.6964 86.8834L56.7773 87.3615ZM38.6414 46.587L52.7271 78.2561L60.3499 80.6161L61.3002 80.9379L65.7664 80.3922L71.2198 59.9053L51.7641 52.6061L38.6414 46.587ZM83.5754 36.0253L78.1798 56.2941L96.53 63.1795L83.5754 36.0253ZM165.339 84.3159L168.972 81.1094V77.6684L144.694 55.0488L138.347 52.9558L117.178 70.9265L145.923 81.711L165.339 84.3159ZM139.284 107.313L159.555 89.4219L144.509 87.4035L112.096 75.2419L109.686 77.2871L121.072 101.153L139.284 107.313ZM71.9661 79.6367L102.291 75.938L102.522 75.7421L100.144 70.7574L76.6733 61.9516L71.9661 79.6367Z" fill="url(#paint0_linear_93_264)"/>
            <defs>
            <linearGradient id="paint0_linear_93_264" x1="217.064" y1="41.4146" x2="231.726" y2="140.272" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset7() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M189.017 106.606L171.763 125.505L148.071 152.863L90.3372 169.425L65.5541 173.158L52.861 160.413L47.8597 154.494L38.1326 161.675L0 148.913V95.2938L121.914 12.1337L135.274 25.5483L136.839 0L163.81 8.12555L258.169 62.6035V111.175L238.553 124.306L210.257 119.366L189.017 106.606ZM48.7812 146.598L66.4177 133.578L40.4214 136.701L48.7812 146.598ZM187.939 99.1845L191.574 95.2032L187.188 86.687L173.045 90.2372L187.939 99.1845Z" fill="url(#paint0_linear_93_269)"/>
            <defs>
            <linearGradient id="paint0_linear_93_269" x1="118.086" y1="34.4874" x2="160.05" y2="129.682" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset8() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M24.3408 372.302L17.4466 369.764V353.105L0 335.669L2.35272 55.9338L25.6892 47.6416L21.9904 29.9012L29.0544 10.1336L34.5282 12.0864L28.014 30.3171L31.2165 45.6783L53.7311 37.6777L53.4859 22.27L49.5081 1.07116L55.2202 0L59.2886 21.6844L59.5374 37.2815L76.3899 54.1239L75.9994 35.317L81.6801 22.8287L86.9714 25.2334L81.837 36.5183L82.3264 60.0567L90.4202 68.1468L120.431 75.6445L109.471 115.074L135.081 149.976V352.591L122.311 357.175L119.744 371.388L120.675 412.426L114.864 412.554L113.921 370.933L115.996 359.441L86.0542 370.19L78.2114 380.167L81.3744 397.022L81.8695 428.156L76.0587 428.249L75.5716 397.615L73.4374 386.242L68.0078 393.142L68.2054 405.538L62.3934 405.631L62.2318 395.442L43.4206 400.972L40.9109 378.402L29.7948 374.31L25.6892 385.8L31.9267 415.726L26.2367 416.911L19.6656 385.382L24.3408 372.302ZM103.116 116.236L94.4945 104.485L95.8277 142.459L103.116 116.236Z" fill="url(#paint0_linear_93_268)"/>
            <defs>
            <linearGradient id="paint0_linear_93_268" x1="27.3921" y1="276.391" x2="166.775" y2="197.709" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset9() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M355.901 45.2781L358.081 40.5133L398.88 28.4375L446.97 17.8099L485.775 21.2552L506.671 6.06129L546.333 10.1021V39.7541L329.481 199.074L278.449 187.127L0 150.608V121.82L149.391 36.5542L178.197 35.3396L209.374 39.8241L224.055 22.7733L285.44 9.6115L304.772 23.9997L331.569 0L396.104 17.5998L351.081 40.2679L355.901 45.2781ZM357.623 55.4502L350.538 70.901L375.54 74.0543L357.623 55.4502Z" fill="url(#paint0_linear_93_270)"/>
            <defs>
            <linearGradient id="paint0_linear_93_270" x1="256.927" y1="125.861" x2="383.385" y2="-62.5389" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset10() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M133.814 100.274L136.38 95.8559L138.782 71.9957L162.432 55.8449L165.903 81.1283L192.081 61.9675L173.866 109.287L182.692 125.568L150.98 144.953L141.608 174.046L117.081 173.138L106.074 191.086L34.5394 189.901L0 164.169V60.7097L24.7966 39.7726L43.6938 34.2528L48.0182 20.2913L55.8748 8.58404L91.6805 0L125.961 13.8724L124.829 29.6241L133.789 31.4038L153.077 32.8781L137.973 62.8817L105.015 84.3314L107.719 110.286L130.017 89.2448L133.814 100.274ZM71.7757 19.2985L85.4747 30.8437L107.02 20.3619L92.3527 13.0774L71.7757 19.2985ZM130.945 114.816L121.93 126.482L132.399 129.731L130.945 114.816Z" fill="url(#paint0_linear_93_275)"/>
            <defs>
            <linearGradient id="paint0_linear_93_275" x1="80.9662" y1="41.218" x2="187.714" y2="111.305" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset11() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M17.95 426.819L5.50521 466.252L0 464.503L12.0094 426.448L0.7368 425.753V246.687L24.9553 57.7661L44.0001 47.3432L47.0593 13.5961L52.8093 14.1288L50.1012 44.0079L52.2261 42.8498L65.164 42.1086V29.4852H70.9383V41.7843L85.6512 40.9505L112.248 0L117.085 3.1616L92.8055 40.5452L98.902 40.1977L91.0363 54.8245L116.045 93.5862L104.259 246.039L76.9089 252.895L96.9503 389.319L88.9991 399.279L88.3097 438.342L82.5365 438.249L83.0932 406.679L64.7113 429.702L61.2444 429.482V452.772H55.4701V429.123L44.477 428.451L41.9664 443.935L36.266 443.009L38.6843 428.092L17.95 426.819ZM70.4336 248.552L66.7693 223.606L55.4759 252.293L70.4336 248.552Z" fill="url(#paint0_linear_93_274)"/>
            <defs>
            <linearGradient id="paint0_linear_93_274" x1="1.15486" y1="167.983" x2="167.683" y2="262.545" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset12() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M78.166 37.9473L165.249 27.036L183 96.0508L122.281 67.2541L94.5484 105L0 54.7441L39.1107 0L78.166 37.9473Z" fill="url(#paint0_linear_93_377)"/>
            <defs>
            <linearGradient id="paint0_linear_93_377" x1="155.723" y1="14.6199" x2="176.289" y2="74.502" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>
        </>
    );
}

function ScrapAsset13() {
    return (
        <>
            <path className="scrap__path" style={{rotate: randomRotate(), transformOrigin: "center", transformBox: "fill-box"}} fillRule="evenodd" clipRule="evenodd" d="M57.2766 0L77.2735 38.9485L109 45.9772L105.953 94.9223L80.7771 113L0 91.455L23.2235 10.8873L57.2766 0Z" fill="url(#paint0_linear_93_376)"/>
            <defs>
            <linearGradient id="paint0_linear_93_376" x1="38.8999" y1="67.5086" x2="108.925" y2="78.1577" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1427"/>
            <stop offset="1" stopColor="#95938D"/>
            </linearGradient>
            </defs>        
        </>
    );
}

// const scrap = [
//         "/assets/scrap-0.svg",
//         "/assets/scrap-1.svg",
//         "/assets/scrap-2.svg",
//         "/assets/scrap-3.svg",
//         "/assets/scrap-4.svg",
//         "/assets/scrap-5.svg",
//         "/assets/scrap-6.svg",
//         "/assets/scrap-7.svg",
//         "/assets/scrap-8.svg",
//         "/assets/scrap-9.svg",
//         "/assets/scrap-10.svg",
//         "/assets/scrap-11.svg",
//         "/assets/scrap-12.svg",
//         "/assets/scrap-13.svg"
//     ];

// function randomRotate() {
//     return Math.floor(Math.random() * 360);
// }

// export function Scrap({ type, l, t, rotate, children, container = "" }) {

//     const root = useRef(null);
//     const scope = useRef(null);

//     // Yes, this is copypaste from PictureFrame.jsx lol
//     useEffect(() => {

//         scope.current = createScope({ root }).add( self => {

//             // console.log(document.getElementById("mapContainer"))
//             const scrapContainer = document.getElementById(container);
            
//             createDraggable(root.current, {
//                 container: scrapContainer,
//                 containerFriction: 1,
//                 maxVelocity: 0.5,
//                 minVelocity: 0,
//                 // dragSpeed: 5.,
//                 // containerPadding: [ -64, -64, -64, -64],
//                 cursor: {
//                     onHover: 'pointer',
//                     onGrab: 'pointer'
//                 }
//             });
            
//         });

//         return () => scope.current.revert()

//     }, []);

//     return (
//         <div className="scrap" ref={root} style={{left: l, top: t, rotate: randomRotate()}}>
//             <img className="scrap__image" src={scrap[type]} draggable="false"/>
//         </div>
//     );
// }

// import { createDraggable, createScope } from 'animejs';
// import { useRef, useEffect } from "react";
// import "./Scrap.scss"