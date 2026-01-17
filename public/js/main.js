// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    console.log('ページが読み込まれました');
    
    // ボタンのイベントリスナー
    const primaryBtn = document.querySelector('.btn-primary');
    const secondaryBtn = document.querySelector('.btn-secondary');
    
    if (primaryBtn) {
        primaryBtn.addEventListener('click', () => {
            alert('プライマリボタンがクリックされました！');
        });
    }
    
    if (secondaryBtn) {
        secondaryBtn.addEventListener('click', () => {
            alert('セカンダリボタンがクリックされました！');
        });
    }
});

