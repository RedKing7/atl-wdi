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


#Challenge 7
my_favorite_animals = {
   'Tucker' => 'Dog',
   'Edgar' => 'Donkey',
   'Severus' => 'Snake',
   'Yogi' => 'Bear',
   'Garfield' => 'Cat'
}
my_favorite_animals['Edgar'] = 'Bear'
favorite_movie = {}
favorite_movie[:movie] = 'The Princess Bride'


#Challenge 8
first_range = (1..10)
first_range = first_range.to_a
second_range = (1...1000)
second_range = second_range.to_a
for number in first_range do
  number = number.to_s
  puts "#{number} #{number.class}"
end
x = 0
while x < 50
  print second_range[x], ' '
  x = x.next
end
puts
new = []
first_range.each do |number|
  new.push(number * 2)
end
print new
puts
first_range.map! do |number, index|
  if number.even?
   number = number.to_s
  else
   number = number
  end
end
for number in first_range do
  puts "#{number} #{number.class}"
end


#Challenge 9
multiples = []
for i in 0..1000
  if i%3 == 0 || i%5 == 0
    multiples.push(i)
  end
end
puts multiples.reduce :+

=end
#The Final Challenge
require 'prime'
def check_prime? num
  if num.prime?
    true
  else
    false
  end
end

def get_primes num
  Prime.each(num) do |prime|
    p prime
  end
end