import React, { Component } from 'react';
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resultText: '', //wyrazenie do oblicznia
      calculationText: ''//Wynik 
    };
    this.operations = ['DEL', '+', '-', '*', '/']; //operatory 
  }

  calculationResult() { //funkcja wykonująca obliczenia z podane go tekstu za pomocą funkcji eval
    const text = this.state.resultText;
    this.setState({
      calculationText: eval(text)
    })
  }
  validate() {
    const text = this.state.resultText
    switch (text.slice(-1)) {
      case '+':

      case '-':

      case '*':

      case '/':
        return false
    }
    return true
  }

  _onPressButton(text) {
    console.log(text);

    if (text == '=') { //przy znaku = wywoływana jest funkacja calculationResult
      return this.validate() && this.calculationResult(this.state.resultText);
    }


    this.setState({ //dodawanie cyfr do wyrazenia
      resultText: this.state.resultText + text
    });
  }

  operate(operation) {
    switch (operation) {
      case 'DEL':
        console.log(this.state.resultText);
        let text = this.state.resultText.split('');
        text.pop();
        this.setState({
          resultText: text.join('')
        });
        break
      case '+':

      case '-':

      case '*':

      case '/':

        const lastChar = this.state.resultText.split('').pop()

        if (this.operations.indexOf(lastChar) > 0) return

        if (this.state.text == "") return
        this.setState(
          {
            resultText: this.state.resultText + operation
          })
    }
  }

  render() {
    let rows = [];
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            key={nums[i][j]}
            style={styles.btn}
            onPress={() => this._onPressButton(nums[i][j])}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>);
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          key={this.operations[i]}
          style={styles.btn}
          onPress={() => this.operate(this.operations[i])} >
          <Text style={[styles.btnText, styles.white]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText} </Text>

        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>

        </View>
      </View>
    );
  }
}

