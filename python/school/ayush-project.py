import mysql.connector

db=mysql.connector.connect(host='localhost',user='root',database='mydb',passwd='root', auth_plugin='mysql_native_password')

cur=db.cursor()


def count_mysql():
    sql="select count(*) from school"
    cur.execute(sql)
    count=cur.fetchall()

    for i in count:
        print("The Number Of Records are",i)

def search_mysql():
    number=input("Enter what needs to be searched:")
    val=(number,)
    sql=''' select * from school where scno = %s '''
    cur.execute(sql,val)
    result=cur.fetchall()
    for i in result:
        print(i)

def delete_mysql():
    deleting=input("Enter the school number that needs to be deleted")
    val=(deleting,)
    sql='''DELETE from school where scno=%s'''
    cur.execute(sql,val)
    db.commit()

def add_record_mysql():
    number=int(input("Enter the school number:"))
    student_name=input("Enter the full name of the student:")
    student_address=input("Enter the address of the customer:")
    house=input("Enter the house of the student:")
    val=(number,student_name,student_address,house)
    sql=''' INSERT INTO bank_acc (scno,sname, saddr, house) VALUES(%s,%s,%s,%s) '''
    cur.execute(sql,val)
    db.commit()

def update_record_mysql():
    cust_name=input("Enter the new full name of the customer:")
    city_cust=input("Enter the new city of the customer:")
    acc_balance=float(input("Enter the new current balance in the account:"))
    update_where=int(input("Enter the acc_no that needs to be changed:"))
    val=(cust_name,city_cust,acc_balance,update_where)
    sql="UPDATE bank_acc SET cust_name=%s, city=%s ,balance=%s where acc_no=%s"
    cur.execute(sql,val)
    db.commit()

if __name__ == '__main__':
    print("Choose from the menu bellow:", '\n',"1. Count",'\n',"2. Search",'\n',"3. Add",'\n',"4. Delete",'\n',"5. Update",'\n',"6. Exit")
    choice = 1
    while choice:
        choice=int(input("Select an option from 1 to 6:"))
        if choice ==1:
            count_mysql()
        elif choice==2:
            search_mysql()
        elif choice==3:
            add_record_mysql()
        elif choice==4:
            delete_mysql()
        elif choice==5:
            update_record_mysql()
        elif choice==6:
            db.close()
            print("Bye!")
            break

db.close()
