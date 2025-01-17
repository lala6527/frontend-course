import{Layout} from'../../components/Layout';
import styles from './home.module.scss'

const Message =(props) =>{
    return(
        <div className={styles.message}>
            <img src={props.img} alt={props.title}/>
            <div className={styles.content}>
                <p className={styles.date}>{props.date}</p>
                <h3>{props.title}</h3>
                <p>{props.summary}</p>
            </div>
        </div>

    )
}

export const Home =()=>{
    return(
        <Layout>
            <h1>Home 財經新聞</h1>
            <Message 
            title="數位部爭取預算曝 唐鳳：增進資安韌性、強化隱私技術運用"
            img="https://cteeimgs.azureedge.net/nownews/20220827/a11608002022082712583625_20220827131405_850.jpg"
            date="2022年08月27"
            summary="數位發展部今（27）日正式揭牌，卻因先前曝光的明年度預算高達218億，引發爭議。數位部長唐鳳今不斷重申，大多為其他部會業務提撥，不過她也證實，數位部確實有提出新的計畫爭取預算，包含爭取增進資安韌性、強化隱私技術運用等。

            數位部籌備工作小組26日指出，數位部明年所編列預算總額，為數位部含兩署公務預算約57億元，其中含各部會移撥業務與預算約32億元，數位部預算佔行政部門總預算2兆7,191億元約0.2％。加上第4期（112年到113年）前瞻基礎建設特別預算約160億餘元，約218億元。"/>
            <Message 
            title="美元指數衝高 弱日圓買盤湧現"
            img="https://cteeimgs.azureedge.net/nownews/20220827/a83205002022082714220671_20220827144010_850.jpg"
            date="2022年08月27"
            summary="數位發展部今（27）日正式揭牌，卻因先前曝光的明年度預算高達218億，引發爭議。數位部長唐鳳今不斷重申，大多為其他部會業務提撥，不過她也證實，數位部確實有提出新的計畫爭取預算，包含爭取增進資安韌性、強化隱私技術運用等。

            傑克森霍爾全球央行年會放鷹，美股道瓊重挫愈千點，美元指數8/26維持在偏高點的108.84，主要非美貨幣當中，歐元、英鎊腳很軟，日圓雖然弱勢、卻仍力撐在137.66，令市場驚訝的是，近周每每美元兌日圓過貶到135就出現多倉，買方看好日圓後續第四季回頭的潛在力道。

            法國巴黎銀行財富管理投資團隊指出，隨著美國聯準會積極升息，較高的避險成本促使日本壽險公司降低美元計價投資的避險比率，帶給美元兌日圓偏強。同時，能源價格上漲及日本以美元支付進口費用的需求增加，導致日本貿易平衡持續惡化，持續為日圓帶來貶值壓力。"/>
            <Message 
            title="數位部揭牌 蔡英文：資安就是國安盼成國際標竿"
            img="https://cteeimgs.azureedge.net/nownews/20220827/a11608002022082710392330_20220827105658_850.jpg"
            date="2022年08月27"
            summary="數位發展部今（27）日正式掛牌，總統蔡英文、行政院長蘇貞昌等貴賓親自蒞臨，共同見證我國數位發展的重要里程碑。蔡英文表示，資安就是國安，會持續努力成為國際開放資料標竿。

            蘇貞昌致詞時說，蔡英文選第一任選總統時，說要讓台灣成為數位國家、智慧島嶼，連任成功說要成立數位部，一直很努力進行各方面籌備，各部會也把相關業務做整合盤點。今天數位部正式掛牌成立，是令人興奮時刻、好的階段開始，讓台灣真正成為數位國家、智慧島嶼。"/>
            
            
        </Layout>
    )
}