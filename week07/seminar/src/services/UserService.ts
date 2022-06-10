import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { UserCreateDto } from "../interfaces/user/UserCreateDto";
import { UserResponseDto } from "../interfaces/user/UserResponseDto";
import { UserUpdateDto } from "../interfaces/user/UserUpdateDto";
import User from "../models/User";
import bcrypt from 'bcryptjs'
import { UserSignInDto } from "../interfaces/user/UserSignInDto";


const createUser = async (userCreateDto: UserCreateDto): Promise<PostBaseResponseDto | null> => {
    
    
    try {
        const exitUser = await User.findOne({
            email: userCreateDto.email
        });

        if (exitUser) return null

        const user = new User({
            name: userCreateDto.name,
            phone: userCreateDto.phone,
            email: userCreateDto.email,
            age: userCreateDto.age,
            password: userCreateDto.password,
            school: userCreateDto.school
        });

        const salt = await bcrypt.genSalt(10);    //sale: 아주 작은 임의의 랜덤한 텍스트
        user.password = await bcrypt.hash(userCreateDto.password, salt);

        await user.save();

        const data = {
            _id: user.id
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateUser = async (userId: string, userUpdateDto: UserUpdateDto): Promise<void> => {
    try {
        //findByIdAndUpdate를 사용해서 update
        await User.findByIdAndUpdate(userId, userUpdateDto);
    
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findUserById = async (userId: string): Promise<UserResponseDto|null> => {
    try {
        // User.findone( _id: )
        const user = await User.findById(userId);
        
        if (!user) {
            return null;
        } else {

        return user; 
    }

    } catch(error) {
        console.log(error);
        throw error;
    }
}

const deleteUserById = async (userId: string): Promise<void> => {

    try {
        await User.findByIdAndDelete(userId);
        
    } catch(error) {
        console.log(error);
        throw error;
    }
} 

const signInUser = async (userSignInDto: UserSignInDto): Promise<PostBseResponseDto | null | number> => {
    try {

        const user = await User.findOne({
            email: userSignInDto.email
        });

        if(!user) return null

        const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
        if (!isMatch) return 401;

        const data = {
            _id: user._id
        };
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
    
}
export default {
    createUser,
    updateUser,
    findUserById,
    deleteUserById,
    signInUser
}