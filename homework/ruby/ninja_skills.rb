=begin

#challenge 1
#1
a = true
#2
b = false
#3
puts a && b
#4
puts a && ! b


#challenge 2
#1
nope = nil
puts nope
puts "#{nope}nil was here"
print nope
puts nope.class


#Challenge 3
#1
d = 10
puts d
#2
e = 5.3
puts e
#3
d = e
puts d


#Challenge 4
#1
christine = 'Hi, I\'m Christine'
#2
likes_to = 'long walks on the beach, kinda.'
#3
tims = "#{christine} and I like #{likes_to}"
puts tims
#4
g = '2'
#5
g_to_number = 2
#6
#puts g + g_to_number  '+' isn't method of string class
puts g + g_to_number.to_s


#Challenge 5
#1
print 'Integer? '
num = gets.chomp.to_i
puts num * 2
#2
print 'Name? '
name = gets.chomp
print 'Likes? '
likes = gets.chomp
puts "#{name} likes #{likes}."
=end

#Challenge 6
my_first_array = []
my_first_array = ['one', 2, 'three', 4, 'five', 6, 'seven', 8, 'nine']
puts my_first_array.last
puts my_first_array.first
my_first_array[1] = 'Joe'
my_first_array[2] = 3
my_first_array.push(true)
my_first_array.push(my_first_array[3].class)
print my_first_array