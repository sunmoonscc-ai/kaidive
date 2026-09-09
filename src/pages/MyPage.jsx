import React from 'react';

const MyPage = ({ user }) => {
  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center pt-24 pb-32">
        <p className="text-gray-500">로그인이 필요한 페이지입니다.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 pt-section-gap-mobile md:pt-section-gap-desktop pb-32">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-3xl font-display-md text-deep-ocean mb-8 border-b pb-4">마이페이지</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 shadow-md flex-shrink-0">
            {user.picture ? (
              <img src={user.picture} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-primary">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">이름</p>
              <p className="text-xl font-bold text-gray-800">{user.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">이메일</p>
              <p className="text-lg text-gray-700">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
