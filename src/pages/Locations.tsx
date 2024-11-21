import React, { useState } from 'react';

const Locations: React.FC = () => {
  // 地點資料陣列
  const locations = [
    {
      key: 'napoli',
      name: '拿坡里炸雞 / 三商炸雞（農安店）',
      address: '104029台北市中山區農安街13號',
      link: 'https://maps.app.goo.gl/qWJixKcRcXRW7Fke6',
    },
    {
      key: 'mitsui',
      name: 'MITSUI OUTLET PARK 林口',
      address: '244新北市林口區文化三路一段356號',
      link: 'https://maps.app.goo.gl/Fxu8qs2UQXFCzkieA',
    },
    {
      key: 'chayao',
      name: '柴窯火腿製造所 三明治專賣店（大巨蛋店）',
      address: '110台北市信義區忠孝東路四段515號B2',
      link: 'https://maps.app.goo.gl/ys5E8BdwFe3VT9hP6',
    },
    {
      key: 'cozy',
      name: '御私藏 Cozy Tea Loft 大巨蛋門市',
      address: '110台北市信義區忠孝東路四段515號',
      link: 'https://maps.app.goo.gl/7Czi3ZFfjeFoGxMRA',
    },
    {
      key: 'viet',
      name: '越共咖啡',
      address: '100台北市中正區開封街一段16號',
      link: 'https://maps.app.goo.gl/Hw9gqEB6Upm4f92g7',
    },
    {
      key: 'xiaowang',
      name: '小王煮瓜',
      address: '108台北市萬華區華西街17之4號攤位153號',
      link: 'https://maps.app.goo.gl/mD3jtnZTG9vW1xyPA',
    },
    {
      key: 'yuanfang',
      name: '源芳刈包',
      address: '108台北市萬華區華西街17-2號',
      link: 'https://maps.app.goo.gl/UtwHCDobdDPqijM79',
    },
    {
      key: 'xiaopin',
      name: '小品雅廚',
      address: '104台北市中山區中原街130號',
      link: 'https://maps.app.goo.gl/5i329C9voHE6PBRA9',
    },
  ];

  // 用來控制每個地點的顯示狀態
  const [visibleLocation, setVisibleLocation] = useState<string | null>(null);

  // 切換顯示的地點
  const toggleLocation = (location: string) => {
    setVisibleLocation(visibleLocation === location ? null : location);
  };

  return (
    <div className="locations">
      <h2>熱銷地點</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.key}>
            <button onClick={() => toggleLocation(location.key)}>
              切換 {location.name}
            </button>
            {visibleLocation === location.key && (
              <div>
                <p>地址：{location.address}</p>
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps 來源
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
