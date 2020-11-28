#Nabin Shrestha
#1001746226
#11/10/2020
#WindowsOS

operators = ['+', '-', '/', '*']  #4 operators
def action(char):                      # checking for the operators (+ - / * )
    if char in operators:
        return True
    return False
def take_action(opt, v1, v2): # passing operators and numbers
    result = 0
    if opt == "+":
        result = v1 + v2   # for addition
    if opt == "-":
        result = v1 - v2  # for subtraction
    if opt == "*":
        result = v1 * v2   # for multiplication
    if opt == "/":
        result = v1 / v2    # for division
    return result
def RNP(array):     # for RPN calculation
    i = 0
    new_array = []
    new_array2 = array
    new_array2_length = len(new_array2)
    if new_array2_length <= 2:
        return new_array2[0]
    while new_array2_length > 2:
        if i+2 < new_array2_length and action(new_array2[i+2]):
            v1 = int(new_array2[i])
            v2 = int(new_array2[i+1])
            opt = new_array2[i+2]
            result = str(take_action(opt, v1, v2))  # converting int to string
            new_array.append(result)     # pushes the array
            if i + 3 < new_array2_length:
                new_array.extend(new_array2[i+3:new_array2_length])  # adds the element to the end of the current list
            new_array2 = new_array
            new_array2_length = len(new_array2)
            new_array = []
            i = 0
            x = " "
            print(x.join(new_array2))    #displays RPN notation
        else:
            new_array.append(new_array2[i])  #pushes the array
            i = i + 1
    return new_array2[0]
def main():
    fileopen = open("input_RPN.txt", 'r')  # opening file 
    reads = fileopen.readlines()    # reading file
    for readline in reads:
        readline = readline.rstrip("\n")  # removes character at the end of string.
        print(readline)
        result = RNP(readline.split(" "))   #splitting the given string
        print('your answer is :', result)
        
if __name__ ==  '__main__':
    main()
