class Sort {
    static quicksort(numbers) {
        if (numbers.length <= 1) {
            return numbers;
        }
        let output = new Array();

        let pivot = numbers[0];

        let equal = new Array();
        let left = new Array();
        let right = new Array();

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == pivot) {
                equal.push(numbers[i]);
            }
            else if (numbers[i] < pivot) {
                left.push(numbers[i]);
            }
            else if (numbers[i] > pivot) {
                right.push(numbers[i]);
            }
        }

        let left_sorted = Sort.quicksort(left);
        let right_sorted = Sort.quicksort(right);

        for (let i = 0; i < left_sorted.length; i++) {
            output.push(left_sorted[i]);
        }
        for (let i = 0; i < equal.length; i++) {
            output.push(equal[i]);
        }
        for (let i = 0; i < right_sorted.length; i++) {
            output.push(right_sorted[i]);
        }

        return output;
    }

    static quicksort_indexed(numbers) {
        let index = new Array();

        for (let i = 0; i < numbers.length; i++) {
            index.push(i);
        }
        return Sort.qsIndx(numbers, index);
    }

    static organize_indexed(elements, organized_index) {
        let output = new Array();

        for (let i = 0; i < elements.length; i++) {
            output.push(elements[organized_index[i]]);
        }

        return output;
    }

    static qsIndx(array, index) {
        if (index.length <= 1) {
            return index;
        }
        let output = new Array();

        let pivot = array[0];

        let equal = new Array();
        let equal_indx = new Array();
        let left = new Array();
        let left_indx = new Array();
        let right = new Array();
        let right_indx = new Array();

        for (let i = 0; i < array.length; i++) {
            if (array[i] == pivot) {
                equal.push(array[i]);
                equal_indx.push(index[i]);
            }
            else if (array[i] < pivot) {
                left.push(array[i]);
                left_indx.push(index[i]);
            }
            else if (array[i] > pivot) {
                right.push(array[i]);
                right_indx.push(index[i]);
            }
        }

        let left_sorted = Sort.qsIndx(left, left_indx);
        let right_sorted = Sort.qsIndx(right, right_indx);

        for (let i = 0; i < left_sorted.length; i++) {
            output.push(left_sorted[i]);
        }
        for (let i = 0; i < equal_indx.length; i++) {
            output.push(equal_indx[i]);
        }
        for (let i = 0; i < right_sorted.length; i++) {
            output.push(right_sorted[i]);
        }

        return output;
    }
}

class DeprecatedSort {
    static quicksort_words(words) {
        let biggest = 0;

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > biggest) {
                biggest = words[i].length;
            }
        }

        let graded = new Array();
        let current = new String();

        for (let i = 0; i < words.length; i++) {
            current = words[i];
            for (let l = 0; l < (biggest - current.length); l++) {
                current += " ";
            }
            graded.push(Sort.gradeWord(current));
        }

        let indexed = Sort.quicksort_indexed(graded);

        return Sort.organize_indexed(words, indexed);
    }

    static gradeWord(word) {
        let output = 1//new String();

        for (let i = 0; i < word.length; i++) {
            output *= 100;
            output += Sort.gradeLetter(word[i])//`${Sort.gradeLetter(word[i])}`;
        }

        console.log(output);
        return parseInt(output);
    }

    static gradeLetter(letter) {
        letter = letter.toUpperCase();
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < alphabet.length; i++) {
            if (letter == alphabet[i]) {
                return i + 1;
            }
        }
        return 0;
    }
}
