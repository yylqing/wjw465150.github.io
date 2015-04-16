d = new dTree("d");
<!--
d.add("0","-1","Redis命令参考简体中文版","my_data/index.html ");
d.add("1","0","键(Key)","my_data/key.html");
d.add("2","0","字符串(String)","my_data/string.html");
d.add("3","0","哈希表(Hash)","my_data/hash.html");
d.add("4","0","队列(List)","my_data/list.html");
d.add("5","0","集合(Set)","my_data/set.html");
d.add("6","0","有序集(Sorted Set)","my_data/sorted_set.html");
d.add("7","1","DEL","my_data/key.html#del");
d.add("8","1","KEYS","my_data/key.html#keys");
d.add("9","1","RANDOMKEY","my_data/key.html#randomkey");
d.add("10","1","TTL","my_data/key.html#ttl");
d.add("11","1","EXISTS","my_data/key.html#exists");
d.add("12","1","MOVE","my_data/key.html#move");
d.add("13","1","RENAME","my_data/key.html#rename");
d.add("14","1","TYPE","my_data/key.html#type");
d.add("15","1","EXPIRE","my_data/key.html#expire");
d.add("16","1","OBJECT","my_data/key.html#object");
d.add("17","1","RENAMENX","my_data/key.html#renamenx");
d.add("18","1","EXPIREAT","my_data/key.html#expireat");
d.add("19","1","PERSIST","my_data/key.html#persist");
d.add("20","1","SORT","my_data/key.html#sort");
d.add("21","2","SET","my_data/string.html#set");
d.add("22","2","SETNX","my_data/string.html#setnx");
d.add("23","2","SETEX","my_data/string.html#setex");
d.add("24","2","SETRANGE","my_data/string.html#setrange");
d.add("25","2","MSET","my_data/string.html#mset");
d.add("26","2","MSETNX","my_data/string.html#msetnx");
d.add("27","2","APPEND","my_data/string.html#append");
d.add("28","2","GET","my_data/string.html#get");
d.add("29","2","MGET","my_data/string.html#mget");
d.add("30","2","GETRANGE","my_data/string.html#getrange");
d.add("31","2","GETSET","my_data/string.html#getset");
d.add("32","2","STRLEN","my_data/string.html#strlen");
d.add("33","2","DECR","my_data/string.html#decr");
d.add("34","2","DECRBY","my_data/string.html#decrby");
d.add("35","2","INCR","my_data/string.html#incr");
d.add("36","2","INCRBY","my_data/string.html#incrby");
d.add("37","2","SETBIT","my_data/string.html#setbit");
d.add("38","2","GETBIT","my_data/string.html#getbit");
d.add("39","3","HSET","my_data/hash.html#hset");
d.add("40","3","HSETNX","my_data/hash.html#hsetnx");
d.add("41","3","HMSET","my_data/hash.html#hmset");
d.add("42","3","HGET","my_data/hash.html#hget");
d.add("43","3","HMGET","my_data/hash.html#hmget");
d.add("44","3","HGETALL","my_data/hash.html#hgetall");
d.add("45","3","HDEL","my_data/hash.html#hdel");
d.add("46","3","HLEN","my_data/hash.html#hlen");
d.add("47","3","HEXISTS","my_data/hash.html#hexists");
d.add("48","3","HINCRBY","my_data/hash.html#hincrby");
d.add("49","3","HKEYS","my_data/hash.html#hkeys");
d.add("50","3","HVALS","my_data/hash.html#hvals");
d.add("51","4","LPUSH","my_data/list.html#lpush");
d.add("52","4","LPUSHX","my_data/list.html#lpushx");
d.add("53","4","RPUSH","my_data/list.html#rpush");
d.add("54","4","RPUSHX","my_data/list.html#rpushx");
d.add("55","4","LPOP","my_data/list.html#lpop");
d.add("56","4","RPOP","my_data/list.html#rpop");
d.add("57","4","BLPOP","my_data/list.html#blpop");
d.add("58","4","BRPOP","my_data/list.html#brpop");
d.add("59","4","LLEN","my_data/list.html#llen");
d.add("60","4","LRANGE","my_data/list.html#lrange");
d.add("61","4","LREM","my_data/list.html#lrem");
d.add("62","4","LSET","my_data/list.html#lset");
d.add("63","4","LTRIM","my_data/list.html#ltrim");
d.add("64","4","LINDEX","my_data/list.html#lindex");
d.add("65","4","LINSERT","my_data/list.html#linsert");
d.add("66","4","RPOPLPUSH","my_data/list.html#rpoplpush");
d.add("67","4","BRPOPLPUSH","my_data/list.html#brpoplpush");
d.add("68","5","SADD","my_data/set.html#sadd");
d.add("69","5","SREM","my_data/set.html#srem");
d.add("70","5","SMEMBERS","my_data/set.html#smembers");
d.add("71","5","SISMEMBER","my_data/set.html#sismember");
d.add("72","5","SCARD","my_data/set.html#scard");
d.add("73","5","SMOVE","my_data/set.html#smove");
d.add("74","5","SPOP","my_data/set.html#spop");
d.add("75","5","SRANDMEMBER","my_data/set.html#srandmember");
d.add("76","5","SINTER","my_data/set.html#sinter");
d.add("77","5","SINTERSTORE","my_data/set.html#sinterstore");
d.add("78","5","SUNION","my_data/set.html#sunion");
d.add("79","5","SUNIONSTORE","my_data/set.html#sunionstore");
d.add("80","5","SDIFF","my_data/set.html#sdiff");
d.add("81","5","SDIFFSTORE","my_data/set.html#sdiffstore");
d.add("82","6","ZADD","my_data/sorted_set.html#zadd");
d.add("83","6","ZREM","my_data/sorted_set.html#zrem");
d.add("84","6","ZCARD","my_data/sorted_set.html#zcard");
d.add("85","6","ZCOUNT","my_data/sorted_set.html#zcount");
d.add("86","6","ZSCORE","my_data/sorted_set.html#zscore");
d.add("87","6","ZINCRBY","my_data/sorted_set.html#zincrby");
d.add("88","6","ZRANGE","my_data/sorted_set.html#zrange");
d.add("89","6","ZREVRANGE","my_data/sorted_set.html#zrevrange");
d.add("90","6","ZRANGEBYSCORE","my_data/sorted_set.html#zrangebyscore");
d.add("91","6","ZREVRANGEBYSCORE","my_data/sorted_set.html#zrevrangebyscore");
d.add("92","6","ZRANK","my_data/sorted_set.html#zrank");
d.add("93","6","ZREVRANK","my_data/sorted_set.html#zrevrank");
d.add("94","6","ZREMRANGEBYRANK","my_data/sorted_set.html#zremrangebyrank");
d.add("95","6","ZREMRANGEBYSCORE","my_data/sorted_set.html#zremrangebyscore");
d.add("96","6","ZINTERSTORE","my_data/sorted_set.html#zinterstore");
d.add("97","6","ZUNIONSTORE","my_data/sorted_set.html#zunionstore");
document.write(d);
//-->
