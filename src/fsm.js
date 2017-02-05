class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
    	if(config){
    	       this.current = this.initial = config.initial;
    	        this.states = config.states;}
    	        else throw new Error('lox')
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.current;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
    	if(this.states[state])
       this.current = state;
       else throw new Error('lox')
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
     trigger(event) {
     	// var bool;
     	if(event){
     	     	// bool = false;   	
     	     		for(var key in this.states){
     	     			for(var prop in this.states[key].transitions){
     	     				if(prop == event){
     	     					this.current = this.states[key].transitions[prop];
     	     					// bool = true;
     	     				}
     	     			}
     	     		}
     	     	}
     	
     	// if(bool == false)
     	// 	// console.log('lox')
     	// 	throw new Error('pidr');
     }

    /**
     * Resets FSM state to initial.
     */
    reset() {
       // this.constructor(config);
       this.current = this.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
     getStates(event) {
     	var result = [];

     	if(!event){
     		for(var key in this.states){
     			result.push(key)
     		}
     	}

     	if(event){
     		for(var key in this.states){
     			for(var prop in this.states[key].transitions){
     				if(prop == event)
     					result.push(key)
     			}
     		}
     	}    	
     	return result;
     }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {

    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {

    }

    /**
     * Clears transition history
     */
    clearHistory() {

    }

}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/


const config = {
    initial: 'normal',
    states: {
        normal: {
            transitions: {
                study: 'busy',
            }
        },
        busy: {
            transitions: {
                get_tired: 'sleeping',
                get_hungry: 'hungry',
            }
        },
        hungry: {
            transitions: {
                eat: 'normal'
            },
        },
        sleeping: {
            transitions: {
                get_hungry: 'hungry',
                get_up: 'normal',
            },
        },
    }
};
var fsm = new FSM(config);

fsm.getStates('get_hungry') 
fsm.trigger('study')
console.log(fsm)
