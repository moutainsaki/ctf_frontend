import React from 'react';

const QBt_u = () => {
  const cards = [
    { id: 1, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 2, status: '未解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 3, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 4, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 5, status: '未解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 6, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 7, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 8, status: '未解決', text: 'kubernetesの中にpod大量発生！！！！' },
    { id: 9, status: '解決', text: 'kubernetesの中にpod大量発生！！！！' },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-[#4fd1c5] min-h-screen">
      {cards.map((card) => (
        <div 
          key={card.id} 
          className="relative bg-white rounded-lg p-6 shadow-lg max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
          style={{ boxShadow: '8px 8px 0px #FFB6B9' }} // 背面の色
        >
          {/* 解決・未解決バッジ */}
          <span
            className={`absolute top-4 right-4 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              card.status === '解決' ? 'bg-green-200 text-green-800' : 'bg-pink-300 text-pink-900'
            }`}
          >
            {card.status}
          </span>
          
          {/* 問題のタイトル */}
          <h2 className="text-2xl font-bold mb-4 text-black">問 {card.id}</h2>
          
          {/* 問題の内容 */}
          <p className="text-lg text-black">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QBt_u;
