import useDebounce from './debounce.hook';
import {useEffect, useState} from 'react';
import UseDebounceHookDescription from './description';

function DebounceHookUsageExample() {
    const [enteredInput1Value, setEnteredInput1Value] = useState('');
    const [enteredInput2Value, setEnteredInput2Value] = useState('');

    const input1DebouncedValue = useDebounce(enteredInput1Value, 300);
    const input2DebouncedValue = useDebounce(enteredInput2Value, 1000);

    const [input1RequestCounter, setInput1RequestCounter] = useState(0);
    const [input2RequestCounter, setInput2RequestCounter] = useState(0);

    useEffect(() => {
        // тут можно сделать запрос
        setInput1RequestCounter(input1RequestCounter + 1);
    }, [input1DebouncedValue])

    useEffect(() => {
        // тут можно сделать запрос
        setInput2RequestCounter(input2RequestCounter + 1);
    }, [input2DebouncedValue])

    return (
      <div className="hooks-usage-example">
          <UseDebounceHookDescription />

          <label>
              Запрос после задержки на 300ms:
              <input value={enteredInput1Value} onChange={(e) => setEnteredInput1Value(e.target.value)} />
          </label>
          <div>Счетчик запросов: {input1RequestCounter}</div>

          <label>
              Запрос после задержки на 1s:
              <input value={enteredInput2Value} onChange={(e) => setEnteredInput2Value(e.target.value)} />
          </label>
          <div>Счетчик запросов: {input2RequestCounter}</div>
      </div>
    );
}

export default DebounceHookUsageExample;
