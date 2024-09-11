function tweetMessage() {
    const message = "SATCHAN 365 Concept Photo \n#SatchanBNK48 #2024_365NichinoKamihikoukiTH ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
