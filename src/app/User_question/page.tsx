'use client';
 
import React, { useState } from 'react';
import Header from "../../components/Header";
 
const QBt_u = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null); // 選択されたカードのIDを保存
  const [flagValues, setFlagValues] = useState<{ [key: number]: string }>({}); // 各カードのFlag値を保存
 
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
 
  const handleCardClick = (id: number): void => {
    setSelectedCardId(id);
  };
 
  const handleFlagChange = (id: number, value: string): void => {
    setFlagValues((prev) => ({ ...prev, [id]: value }));
  };
 
  const handleCloseModal = (): void => {
    setSelectedCardId(null);
  };
 
  const handleSubmitFlag = (): void => {
    if (selectedCardId !== null) {
      const flag = flagValues[selectedCardId];
      console.log(`Card ID: ${selectedCardId}, Flag: ${flag}`);
      alert(`Flag submitted for Card ${selectedCardId}: ${flag}`);
      setSelectedCardId(null); // モーダルを閉じる
    }
  };
 
  return (
    <div className="relative">
      <Header />
      {/* 背景ぼかし */}
      {selectedCardId !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          onClick={handleCloseModal}
        ></div>
      )}
 
      {/* カード一覧 */}
      <div className="grid grid-cols-3 gap-6 p-6 bg-[#4fd1c5] min-h-screen">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className="relative bg-white rounded-lg p-6 shadow-lg max-w-xs mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ boxShadow: '8px 8px 0px #FFB6B9' }}
          >
            <span
              className={`absolute top-4 right-4 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                card.status === '解決' ? 'bg-green-200 text-green-800' : 'bg-pink-300 text-pink-900'
              }`}
            >
              {card.status}
            </span>
            <h2 className="text-2xl font-bold mb-4 text-black">問 {card.id}</h2>
            <p className="text-lg text-black">{card.text}</p>
          </div>
        ))}
      </div>
 
{/* モーダル */}
{selectedCardId !== null && (
  <div
    className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50"
    onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じない
  >
    <div
      className="bg-white rounded-lg shadow-xl relative p-8 flex flex-col"
      style={{ width: '800px', height: '400px', overflow: 'hidden' }} // 高さを400pxに設定
    >
      {/* モーダルの閉じるボタン */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        onClick={handleCloseModal}
      >
        ×
      </button>
 
      {/* 問題番号と名前 */}
      <div className="flex items-center space-x-8 mb-4">
        <h3 className="text-4xl font-bold text-left">問 {selectedCardId}</h3>
        <p className="text-4xl text-gray-700 text-left">Kubemetesの中にpod大量発生！！！！</p>
      </div>
 
      {/* 問題詳細 */}
      <div className="flex-1 overflow-y-auto mb-4 p-4 border border-gray-300 rounded-lg" style={{ maxHeight: '200px' }}>
        <p className="text-2xl text-gray-700 text-center whitespace-pre-wrap">
          Kubemetesの中でpodが大量発生しました！！<br />
          原因を特定してpodの増産を止めてください！<br />
          きっとそこにFlagがあるわ！！
        </p>
      </div>
 
      {/* Flag入力とSubmitボタン */}
      <div className="flex items-center space-x-4">
        {/* Flag入力 */}
        <div className="w-full max-w-lg flex-1">
          <label
            htmlFor={`flag-${selectedCardId}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Flagを入力:
          </label>
          <input
            id={`flag-${selectedCardId}`}
            type="text"
            value={flagValues[selectedCardId] || ''}
            onChange={(e) => handleFlagChange(selectedCardId, e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-full h-[44px]"
            placeholder="フラグを入力してください"
          />
        </div>
 
        {/* 送信ボタン */}
        <button
          onClick={handleSubmitFlag}
          className="bg-[#33BBAB] text-white px-6 py-2 rounded-md shadow hover:opacity-90 h-[44px] flex items-center justify-center mt-6"
        >
          送信
        </button>
      </div>
    </div>
  </div>
)}
 
    </div>
  );
};
 
export default QBt_u;