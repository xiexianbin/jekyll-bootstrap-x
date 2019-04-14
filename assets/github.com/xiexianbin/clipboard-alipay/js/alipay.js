if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var clipboard = new Clipboard('.alipaycode', {
    text: function() {
      console.info('copy alipay hongbao success!');
      return 'LDO7uX81Tj';
    }
  });
} else {
  console.info('skip copy!');
}
