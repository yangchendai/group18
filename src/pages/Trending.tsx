import React from 'react';
import './Trending.css'; // 引入CSS檔案

const Trending: React.FC = () => {
  return (
    <div className="trending">
      <h2 className="trending-title">熱門事物</h2>
      <ul className="trending-list">
        <li className="trending-item"><b>拿坡里炸雞&三商炸雞：</b> 擁有外酥內嫩的炸雞，最近改名為「三商炸雞」，並推出了新產品如蔥香蒜辣雞柳條。</li>
        <li className="trending-item"><b>林口outlet：</b> 林口三井Outlet是一個時尚購物中心，擁有多家人氣餐廳，是購物與美食愛好者的好去處。</li>
        <li className="trending-item"><b>柴窯火腿製造所 金沙肉鬆三明治：</b> 這家店提供香氣四溢的手作三明治，尤其以金沙肉鬆三明治最受歡迎，搭配起司，口感獨特。</li>
        <li className="trending-item"><b>御私藏 台灣肉乾珍珠奶茶：</b> 來自台南的特色手搖飲品牌，搭配肉乾的珍珠奶茶，曾獲得紐約珍奶節獎項。</li>
        <li className="trending-item"><b>2024必比登美食：</b> 解婕翎在台北品嚐到的2024必比登美食，挑選了幾家在地小吃和餐廳，值得一試。</li>
        <li className="trending-item"><b>越共咖啡：</b> 提供地道的越南風味咖啡與三明治，特別推薦其越南滴漏咖啡，風味濃郁。</li>
        <li className="trending-item"><b>Steam遊戲《窒愛》：</b> 這款遊戲帶來緊張刺激的解謎冒險，結合獨特的劇情與遊戲機制，吸引不少玩家。</li>
        <li className="trending-item"><b>Steam遊戲《咒》：</b> 《咒》是一款恐怖冒險遊戲，提供玩家在恐怖環境中解開謎團，挑戰膽量。</li>
      </ul>
    </div>
  );
};

export default Trending;
Trending.css