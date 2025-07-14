import React from 'react';
import AutoTruncateBox from './AutoTruncateBox';

function App() {
  return (
    <div style={{ width: '500px', margin: '20px' }}>
      <h2>Auto-Truncating Text Box</h2>
      <AutoTruncateBox
        text="This is a very long text that should be truncated if it exceeds the container's dimensions. It can span multiple lines if needed. Lorem Ipsum is simply dummy text. Lorem Ipsum has been the industry standard dummy text since the 1500s, when an unknown printer blah blah blah."
        maxLines={3}
        showToggle={true}
        ellipsis="... (click to expand)"
        style={{ border: '1px solid #ddd', padding: '10px' }}
      />
      <AutoTruncateBox
        text="Let me tell you about a webcomic called Homestuck. Homestuck was the fourth major work of American artist Andrew Hussie, started in 2009 at his website MS Paint Adventures. It has been compared to a 'modern day Ulysses' and features perplexing, abstract postmodernist philosophy that fundamentally shapes its multi-part narrative."
        maxLines={3}
        showToggle={false}
        //ellipsis="... (click to expand)"
        style={{ border: '1px solid #ddd', padding: '10px' }}
      />
    </div>
  );
}

export default App;
