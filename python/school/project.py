import mysql.connector

db=mysql.connector.connect(host='localhost',user='root',database='mydb',password='root')

cur=db.cursor()


def count_mysql():
    sql="select count(*) from school"
    cur.execute(sql)
    count=cur.fetchall()

    for i in count:
        print("The Number Of Records are",i)

def search_mysql():
    number=input("Enter the school number: ")
    val=(number,)
    sql=''' select * from school where scno = %s '''
    cur.execute(sql,val)
    result=cur.fetchall()
    for i in result:
        print(i)

def show_all():
    sql = "select * from school"
    cur.execute(sql,)
    result = cur.fetchall()
    for i in result:
        print(i)


def delete_mysql():
    deleting=input("Enter the school number that needs to be deleted: ")
    val=(deleting,)
    sql='''DELETE from school where scno=%s'''
    cur.execute(sql,val)
    db.commit()

def add_record_mysql():
    number=int(input("Enter the school number: "))
    student_name=input("Enter the full name of the student: ")
    student_address=input("Enter the address of the customer: ")
    house=input("Enter the house of the student: ")
    val=(number,student_name,student_address,house)
    sql=''' INSERT INTO school (scno,sname, address, house) VALUES(%s,%s,%s,%s) '''
    cur.execute(sql,val)
    db.commit()

def update_record_mysql():
    sname=input("Enter the new full name of the Student")
    address=input("Enter the address of the student:")
    house=input("Enter the house of the student")
    scno=int(input("Enter the School number that needs to be changed:"))
    val=(sname,address, house, scno)
    sql="UPDATE school SET sname=%s, address=%s ,house=%s where scno=%s"
    cur.execute(sql,val)
    db.commit()

if __name__ == '__main__':
    print("Choose from the menu bellow:", '\n',"1. Count",'\n',"2. Search",'\n',"3. Add",'\n',"4. Delete",'\n',"5. Update",'\n',"6. Display all records \n","7. Exit")
    while True:
        choice = 'a'
        while True:
            try:
                choice=int(input("Select an option from 1 to 7:"))
                break
            except: 
                print('Try again')
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
            show_all()
        elif choice==7:
            db.close()
            print("Bye!")
            break
db.close()
