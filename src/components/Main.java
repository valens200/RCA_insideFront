import java.util.Scanner;

public class Main{

    public static  String  longSubstring(String s){
        int sum = 0;
        String sub = "";
        for(int i = 0; i < s.length() ; i++){
            for( int j = s.length() ; j > 0; j--){
                if( s.substring(i, j).length() > sum){
                    sum = s.substring(i, j).length();
                }else{
                    sub = s.substring(i, j);

                }
 
            }
        }
    return sub;
    }
    public static void main(String[] args) {

        String input;
        Scanner scan = new Scanner(System.in);
        System.out.print("Input : s = ");
        input = scan.nextLine();
        System.out.println("Output :" + Main.longSubstring(input));

        
    }
}