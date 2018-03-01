#!/usr/bin/env ruby

require 'json'
require 'rubygems'
require 'nokogiri'

def getFrom
	ARGV[0]
end

def getTo
	ARGV[1]
end

def getUserObjet(firstName)
	employees = File.read("./employeesHack.js")
	data = JSON.parse(employees)
	data.each do |em|
		return em if em['first']==firstName
	end
	raise "#{firstName} not found"
end

def getCoordinates(em)
	coordinates = File.read("./coordinatesHack.js")
	data = JSON.parse(coordinates)
	data.each do |coor|
		return coor if coor['horiz']==em['horiz'] && coor['vert']==em['vert']
	end
end

def updateBaseMap(from, to)
	baseMap = Nokogiri::HTML(open("BaseMap.html"))
	baseMap.css("a-cylinder")[0]['position'] = "#{from['x']} #{from['y']} #{from['z']}"
	baseMap.css("a-cylinder")[1]['position'] = "#{to['x']} #{to['y']} #{to['z']}"
	begin
	   File.delete("NewMap.html")
	rescue Errno::ENOENT
	end

	File.open("NewMap.html", 'w') { |file| file.write(baseMap) }
end

module Vmap
	raise "You must enter From To ONLY! Jeeze" if ARGV.size!=2
	fromEm = getUserObjet(getFrom)
	toEm = getUserObjet(getTo)

	fromCor = getCoordinates(fromEm)
	toCor = getCoordinates(toEm)

	updateBaseMap(fromCor,toCor)
	`open NewMap.html`
end